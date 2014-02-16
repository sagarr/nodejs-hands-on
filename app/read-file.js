
	var fs = require("fs");
	
	fs.readFile("c:/devday/hello-world2.js", "UTF-8", function(e, d) {
		if(e) throw e;
		console.log(d);
	});
	
	console.log("file reading done");