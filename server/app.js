/**
 * Created by movibe on 24/12/14.
 */
var
    app = require('express'),
    server = require('http').Server(app),
    io = require('socket.io')(server);

io.on('connection', function (socket) {
   socket.on('event:new:image', function (data) {
       socket.broadcast.emit('event:incoming:image', data);
   }) ;
});

server.listen(8000, function () {
    console.log ("Socket.io Running");
});