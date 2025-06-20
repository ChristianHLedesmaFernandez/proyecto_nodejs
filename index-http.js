// Servidor HTTP

// Si uso Module

// import http from "http"; 
const http = require("http");
const server =  http.createServer((req, res) => {
    res.statusCode = 201;
    console.log(req.method, req.url);
    res.setHeader("Content-Type", "text/html");
    res.end('<h1>Soy tu Servidor HTTP, Un Gusto</h1>');    
});
const PORT = 3000;
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));


