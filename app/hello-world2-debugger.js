
		setTimeout(function() {
			console.log("World!");
		}, 1000);
		console.log("Hello ");
		
		function foo() {
			debugger;
			console.log("in foo");
		}
		
		foo();