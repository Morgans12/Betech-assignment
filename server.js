const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
	response.send('Hello Emmanuel from my Express server!');
});

app.use((request, response) => {
	response.status(404).send('404 - Page not found');
});

app.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});
