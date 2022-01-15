//Configure server

// step:1 import Package
const express = require("express");

//step:2 create Server
const server = express();


//step:3 Configure port
server.listen(3100);


//step:4  Handle request on Default Path
server.get("/", (req, res)=>{
    //Sending Esponse to client
    res.send("Hello from ExpressJS using nodemon");
});

console.log("Server is listening on localhost:3100");