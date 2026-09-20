const http = require('http');  //Built- in module

const server = http.createServer((request, response) => {
	if (request.method === "GET" && request.url === '/') {
		response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.end('Hello Emmanuel from my Node.js server!');
	} else {
		response.writeHead(404, { 'Content-Type': 'text/plain' });
		response.end('404 - Page not found');
	}
});

const port = 3000;

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
