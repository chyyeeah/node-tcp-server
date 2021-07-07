const net = require('net');

const server = net.createServer(socket => {
  console.log('client connected');
  socket.on('data', (data) => {
    socket.write('hello!\n')
  });
});

server.listen(3000, () => console.log('listening on port 3000'));