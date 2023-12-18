const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
   console.log('its done');
   console.log(req.url, req.method);
   res.write('Hello world!');
   res.end();
});

server.listen(3000, 'localhost', (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
})