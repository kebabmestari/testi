//Ota http moduuli
var http = require('http');

console.log('Start');

//Luo serveri
var server = http.createServer(function(req, res) {
	var posti = '';
		res.writeHead(200); //OK
		res.end('Lähetetty data: ' + posti);
		res.send();
	console.log('HTTP requesti tullut... kasitellaan');
	req
	.on('data', function(chunk) { //Jos tulee POST dataa
		if( req.method == 'POST' ){
			posti += chunk || 'EI DATAA';
			console.log('Tullut data: ' + chunk);
		}
	})
	.on('end', function() { //Response
		res.writeHead(200); //OK
		res.end('Lähetetty data: ' + posti);
	});
});
server.listen(8080);

//EBUN BUGIFIX