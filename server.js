var http = require('http');
var io =require('socket.io'),
fs =require('fs');

server = http.createServer().listen(8888);
var socketserver = io.listen(server);

server.on('request',function(req,res){
        res.writeHead(200,{'content-type':'text/html'});
	fs.readFile(__dirname+'/index.html',function(err,data){
		if(err){
			res.writeHead(500,{});
			res.end("cannot connect");
		} else {
                        res.end(data);
                }
	});
});

socketserver.on('connection',function(socket){
	socket.emit('news',{'name':'lily'});
	console.log('client connected');
});