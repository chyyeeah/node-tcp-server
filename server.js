const net = require('net');
const faker = require('faker');

const server = net.createServer(socket => {
  console.log('client connected');
  socket.on('data', (data) => {
    if (data.toString().trim() === 'uuid') {
      socket.write(faker.fake('{{datatype.uuid}}\n'))
    }
    if (data.toString().trim() === 'first name') {
      socket.write(faker.fake('{{name.firstName}}\n'))
    }
    if (data.toString().trim() === 'last name') {
      socket.write(faker.fake('{{name.lastName}}\n'))
    }
    if (data.toString().trim() === 'full name') {
      socket.write(faker.fake('{{name.firstName}} {{name.lastName}}\n'))
    }
    if (data.toString().trim() === 'coin flip') {
      const result = faker.fake('{{datatype.boolean}}');
      if (result === 'true') {
        socket.write('heads\n');
      } else {
        socket.write('tails\n');
      }
    }
  });
});

const PORT = process.argv[2];
server.listen(PORT, () => console.log(`listening on port ${PORT}`));