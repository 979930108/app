/**
 * Created by xzp08573 on 2017/9/25.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
    app.get('/', function(req, res){
        res.send('<h1>Welcome Realtime Server</h1>');
    });

    io.on('connection', function(socket){
        console.log('a user connected');

        socket.on("disconnect", function() {
            console.log("a user go out");
        });

        socket.on("value", function(value) {
            io.emit("value", {"value":value.value});
        });
    });

    http.listen(3000, function(){
        console.log('listening on *:3000');
    });