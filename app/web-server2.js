
	var http = require("http");
	
	var server = http.createServer(function(req, res) {
		res.writeHead(200, {"Content-Type": "text/plain"});
		setTimeout(function() {
			res.end("World!");
		}, 2000);
		res.write("Hello \n");
	});
	
	server.listen(8080);