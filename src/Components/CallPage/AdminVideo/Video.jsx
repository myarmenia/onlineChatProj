// src/VideoChat.js
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';

const VideoChat = ({ ROOM_ID }) => {
  const [peers, setPeers] = useState({});
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [messages, setMessages] = useState([]);
  const videoGridRef = useRef(null);
  const myVideoRef = useRef(null);
  const socketRef = useRef();
  const myPeerRef = useRef();
  const myStreamRef = useRef();
  const inputRef = useRef(null);
  const mainRightRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('/');
    myPeerRef.current = new Peer(undefined, {
      path: '/peerjs',
      host: '/',
      port: '3031'
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      myStreamRef.current = stream;
      addVideoStream(myVideoRef.current, stream);

      myPeerRef.current.on('call', handleCall);
      socketRef.current.on('user-connected', userId => connectToNewUser(userId, stream));
    });

    socketRef.current.on('user-disconnected', userId => peers[userId]?.close());
    socketRef.current.on('createMessage', (message, userName) => {
      setMessages(prevMessages => [...prevMessages, { userName, message }]);
    });

    myPeerRef.current.on('open', id => socketRef.current.emit('join-room', ROOM_ID, id, ''));

    return () => {
      socketRef.current.disconnect();
      myPeerRef.current.destroy();
      Object.values(peers).forEach(peer => peer.close());
    };
  }, [ROOM_ID, peers]);

  const handleCall = call => {
    call.answer(myStreamRef.current);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => addVideoStream(video, userVideoStream));
  };

  const connectToNewUser = (userId, stream) => {
    const call = myPeerRef.current.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => addVideoStream(video, userVideoStream));
    call.on('close', () => video.remove());
    setPeers(prevPeers => ({ ...prevPeers, [userId]: call }));
  };

  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => video.play());
    videoGridRef.current.append(video);
  };

  const toggleVideo = () => {
    const enabled = myStreamRef.current.getVideoTracks()[0].enabled;
    myStreamRef.current.getVideoTracks()[0].enabled = !enabled;
    setIsVideoEnabled(!enabled);
  };

  const toggleAudio = () => {
    const enabled = myStreamRef.current.getAudioTracks()[0].enabled;
    myStreamRef.current.getAudioTracks()[0].enabled = !enabled;
    setIsAudioEnabled(!enabled);
  };

  const sendMessage = () => {
    if (inputRef.current.value !== '') {
      socketRef.current.emit('message', inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const toggleChat = () => {
    mainRightRef.current.classList.toggle('active');
  };

  const inviteMembers = () => {
    prompt("Copy this link and send it to people you want to invite", window.location.href);
  };

  const startScreenShare = () => {
    navigator.mediaDevices.getDisplayMedia({ video: { cursor: 'always' }, audio: { echoCancellation: true, noiseSuppression: true } })
      .then(screenStream => {
        addVideoStream(myVideoRef.current, screenStream);

        screenStream.getVideoTracks()[0].onended = () => {
          addVideoStream(myVideoRef.current, myStreamRef.current);
        };

        socketRef.current.emit('screen-share', { streamId: myPeerRef.current.id, roomId: ROOM_ID });
      })
      .catch(error => console.error('Error sharing screen:', error));
  };

  const togglePointerControl = () => {
    document.addEventListener('mousemove', event => {
      const pointerData = {
        roomId: ROOM_ID,
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
      socketRef.current.emit('pointer-control', pointerData);
    });
  };

  useEffect(() => {
    socketRef.current.on('pointer-control', data => {
      let pointer = document.getElementById('pointer');
      if (!pointer) {
        pointer = document.createElement('div');
        pointer.id = 'pointer';
        pointer.style.position = 'absolute';
        pointer.style.width = '20px';
        pointer.style.height = '20px';
        pointer.style.background = 'red';
        pointer.style.borderRadius = '50%';
        document.body.appendChild(pointer);
      }
      pointer.style.left = `${data.x * window.innerWidth}px`;
      pointer.style.top = `${data.y * window.innerHeight}px`;
    });
  }, []);

  return (
    <div>
      <div id="video-grid" ref={videoGridRef}>
        <video ref={myVideoRef} muted playsInline style={{ transform: 'rotateY(180deg)' }}/>
      </div>
      <button id="stopVideo" onClick={toggleVideo}>
        {isVideoEnabled ? <i className="fa fa-video-camera"></i> : <i className="stop fa fa-video-slash"></i>}
      </button>
      <button id="muteButton" onClick={toggleAudio}>
        {isAudioEnabled ? <i className="fa fa-microphone"></i> : <i className="unmute fa fa-microphone-slash"></i>}
      </button>
      <button id="showChat" onClick={toggleChat}>Show/Hide Chat</button>
      <div className="main__right" ref={mainRightRef}>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>
              <b><i className="far fa-user-circle"></i> <span>{msg.userName || 'Anonymous'}</span></b><br />
              {msg.message}
            </div>
          ))}
        </div>
        <input id="chat_message" type="text" ref={inputRef} onKeyDown={e => e.key === 'Enter' && sendMessage()} />
        <button id="send" onClick={sendMessage}>Send</button>
      </div>
      <button id="inviteButton" onClick={inviteMembers}>Invite</button>
      <button id="screenShareButton" onClick={startScreenShare}>Share Screen</button>
      <button id="pointerControlButton" onClick={togglePointerControl}>Pointer Control</button>
    </div>
  );
};

export default VideoChat;
