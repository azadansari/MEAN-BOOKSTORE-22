// Configure server

// Step 1: Import Express package
const express = require("express");
const bookRoutes = require("./routers/book");
const mongodb = require("./configs/mongodb");
const cors = require("cors");

// Step 2: Create Server
const server = express(); 

// Connect to mongodb
mongodb.connect();

// Step 3: Configure port
server.listen(3100);
// Cross Origin Resource Sharing
server.use(cors("*"));

// Custom Routes
// Redirect book related requests to book routes.
console.log("Index.js");
server.use('/api/Book', bookRoutes);

// Step 4: Handle request on default path
server.get("/", (_req, res)=>{
    // Sending respone to client
    res.send("Hello from Express JS");
});

console.log("Server is listening on localhost:3100");