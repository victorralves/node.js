var http = require("http");

http.createServer(function(req, res){
    res.end("Hello World!");
}).listen();

console.log("O Serve ta rodando!");