let http = require("http");

//ES5 style callback
//let server = http.createServer(function(req,res){

//})

//ES6 style
let server = http.createServer((request,response)=>{
    response.end("welcome to simple http module");
});

server.listen(9090,()=>console.log("Server running on port number 9090"));