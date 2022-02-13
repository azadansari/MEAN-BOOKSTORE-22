let fs = require("fs");
let msg = "Welcome to Nodejs Synchronous operation";
fs.writeFileSync("demo2.txt",msg);
console.log("Data stored successfully");
console.log("Hi");
console.log("Hello");