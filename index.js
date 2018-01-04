console.log('Basic Http Server\n');

const http = require('http');
const connect = require('connect');
const bodyParser = require('body-parser');

/*
let handlerMethod = (req, res) => {

	res.end('a simple response from a simple webserver');

}
http.createServer(handlerMethod).listen(3456, 'localhost');
console.log('Http Server listening on port 3456');
*/

/*
let app = connect()
	.use(bodyParser.urlencoded(
		{extended:true}
	))
	.use((req,res) => {

		let parsedInfo = {};
		parsedInfo.firstName = req.body.userFirstName;
		parsedInfo.lastName = req.body.userLastName;

		res.end("User info parsed from form: " + parsedInfo.firstName + " " + parsedInfo.lastName)

	})
http.createServer(app).listen(3456, 'localhost');
console.log('Http Server listening on port 3456');
*/


console.log(http);

/*

let app = connect()
	.use((req, res) => {

		if (req.url == '/hello') {
			console.log('sending plain');
			res.end('hello from app');
		}
		else if (req.url == '/hello.json') {
			console.log('sending json');

			let data = 'Hello';
			let jsonData = JSON.stringify(data);

			res.setHeader('Content-Type','application/json');
			res.end(jsonData);
		}
		else if (req.url == '/statusCodeDemo') {
			console.log('sending 404 status code');

			res.statusCode = 404;
			res.end('Oops, could not find something');
		}

	})
	.listen(3456);
console.log('Http Server listening on port 3456');
*/