// socketService.js

import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const connectSocket = () => {
  socket.connect();

  // Handle connection events if needed
  socket.on('connect', () => {
    console.log('Connected to Socket.IO');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from Socket.IO');
  });

  return socket;
};

export { connectSocket, socket };
