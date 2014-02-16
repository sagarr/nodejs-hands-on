
	var net = require("net");
	
	var server = net.createServer(function(socket) {
		console.log("socket recieved from " + socket.remoteAddress);
		socket.write("Hello Socket\n");
		// echo
		socket.on("data", function(d) {
			socket.write(d);			
		});		
	});
	
	server.listen(9000);	