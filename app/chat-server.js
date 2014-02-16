
	var net = require("net");
	var readline = require("readline");
	
	var sockets = [];
	
	var server = net.createServer(function(socket) {
		console.log(socket.remoteAddress + " connected");
				
		sockets.push(socket);
		socket.setEncoding('utf8');
		
		/*var i = readline.createInterface(socket, socket);
		i.on("line", function (line) {
			sockets.forEach(function(s) {
				if(socket !== s) { s.write(line + "\r\n") };
			});
		});*/
		
		/*var msg = "";
		socket.on("data", function(d) {
			msg += d;
			if(d.toString().indexOf("\n") != -1) {
				sockets.forEach(function(s) {
					if(socket !== s) { s.write(msg) };
				});
				msg = "";
			}
		});*/
		
		socket.on("close", function() {
			sockets.splice(sockets.indexOf(socket), 1);
		});
	});
	
	server.listen(9000);