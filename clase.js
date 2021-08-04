//Servidor con HTTP
const http = require("http");

const server = http.createServer(function (request, response) {
    console.log("Request received from client");
    console.log("URL: ", request.url);
    console.log("Header: ", request.headers);
    console.log("Method: ", request.method);
    console.log("Body: ", request.body);
    response.writeHead(200, {"Content-Type": "text-plain"});
    response.write("Hello from server!");
    console.log("Header Response: ", response.getHeaders());
    console.log("Status Code: ", response.statusCode);
    response.end();
});

server.listen(3000);

//Servidor con Express
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello from express server");
});

app.listen(4000);