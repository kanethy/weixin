//创建HTTP对象
const app = require('http').createServer();

const server = require('socket.io')(app);

server.listen(5000);