const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(process.env.PORT ||5000);

app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('chat', data =>{
        io.sockets.emit('chat', data);
    });
});

