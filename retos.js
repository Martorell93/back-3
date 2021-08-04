//Reto 1 (servidor con HTTP)
const { stat } = require("fs");
const http = require("http");

const server = http.createServer(function (request, response) {
    console.log("Petición recibida del cliente");
    console.log("URL: ", request.url);
    console.log("Método: ", request.method);
    console.log("User agent: ", request.headers["user-agent"]);
    console.log("Content type: ", request.headers["content-type"]);
    console.log("Content length: ", request.headers["content-length"]);
    response.writeHead(200, {"Content-Type": "application/json"});

    if (request.url === "/bye") {
        response.write('{"ok": true, "message": "Adiós!"}');
    }
    else {
        response.write('{"ok": true, "message": "Recibido!"}');
    }
    
    response.end();
})

server.listen(3000);

//Reto 3 (servidor con Express)
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.write('{"ok": true, "message": "Recibido!"}');
    res.end();
});

app.get("/bye", function (req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.write('{"ok": true, "message": "Adiós!"}');
    res.end();
});

app.post("/", function (req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.write('{"ok": true, "message": "Recibido!"}');
    res.end();
});

app.post("/bye", function (req, res) {
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.write('{"ok": true, "message": "Adios!"}');
    res.end();
});

app.put("/", function (req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.write('{"ok": true, "message": "Recibido!"}');
    res.end();
});

app.put("/bye", function (req, res) {
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.write('{"ok": true, "message": "Adios!"}');
    res.end();
});

app.delete("/", function (req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.write('{"ok": true, "message": "Recibido!"}');
    res.end();
});

app.delete("/bye", function (req, res) {
    console.log("Petición recibida del cliente (express)");
    console.log("URL: ", req.url);
    console.log("Método: ", req.method);
    console.log("User agent: ", req.headers["user-agent"]);
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.write('{"ok": true, "message": "Adios!"}');
    res.end();
});

app.listen(4000);