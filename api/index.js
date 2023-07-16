const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    //this is client host
    origin: 'http://localhost:5173',
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('user Connected!');
  //msg from client to server
  socket.on('send-message', (data) => {
    socket.emit('message-from-server', data);
    // console.log('message', data);
  });

  //When user left, then server disconnected
  socket.on('disconnect', (socket) => {
    console.log('user left-1');
  });

  // //Rooms Create
  socket.join('some room', (data) => {
    console.log('Created room', data);
  });
});

httpServer.listen(4000, () => {
  console.log('listening on :4000');
});
