import React from 'react'
import VideoChat from './Components/test';

const TestApp = () => {
  const ROOM_ID = 'your-room-id'; // Replace with actual room ID

  return (
    <div className="App">
      <h1>Video Chat</h1>
      <VideoChat ROOM_ID={ROOM_ID} />
    </div>
  );

}

export default TestApp