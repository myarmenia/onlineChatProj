// src/VideoChat.js
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';

const VideoChat = ({ ROOM_ID }) => {
  const [peers, setPeers] = useState({});
  const videoGridRef = useRef(null);
  const myVideoRef = useRef(null);
  const socketRef = useRef();
  const myPeerRef = useRef();
  const myStreamRef = useRef();

  useEffect(() => {
    socketRef.current = io('/');
    myPeerRef.current = new Peer(undefined, {
      path: '/peerjs',
      host: '/',
      port: '3031'
    });

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      myStreamRef.current = stream;
      const myVideo = myVideoRef.current;
      myVideo.muted = true;
      addVideoStream(myVideo, stream);

      myPeerRef.current.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
          addVideoStream(video, userVideoStream);
        });
      });

      socketRef.current.on('user-connected', userId => {
        connectToNewUser(userId, stream);
      });
    });

    socketRef.current.on('user-disconnected', userId => {
      if (peers[userId]) peers[userId].close();
    });

    myPeerRef.current.on('open', id => {
      socketRef.current.emit('join-room', ROOM_ID, id, ''); // User name can be passed here if needed
    });

    return () => {
      socketRef.current.disconnect();
      myPeerRef.current.destroy();
      Object.values(peers).forEach(peer => peer.close());
    };
  }, [ROOM_ID]);

  const connectToNewUser = (userId, stream) => {
    const call = myPeerRef.current.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream);
    });
    call.on('close', () => {
      video.remove();
    });

    setPeers(prevPeers => ({ ...prevPeers, [userId]: call }));
  };

  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    videoGridRef.current.append(video);
  };

  return (
    <div id="video-grid" ref={videoGridRef}>
      <video ref={myVideoRef} />
    </div>
  );
};

export default VideoChat;
