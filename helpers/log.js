function log(text) {
	protractor.promise.controlFlow().execute(
		function() {
			console.log(text);
		}
	);
}