import http from 'http';
const PORT = 5000

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.statusCode = 404 ;

    res.end('<h1>Hello World </h1>');
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});