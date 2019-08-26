function init() {
	var serverBaseUrl = document.domain;

	var socket = io.connect(serverBaseUrl);

	var sessionId = '';

	socket.on('connect', function() {
		sessioId = socket.io.engine.id;
		console.log(`Connected ${sessionId}`);
	});
}

$(document).ready(init);