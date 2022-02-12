// load the module

var fs = require("fs");

let msg = "Welcome to nodejs Fs Module program";

// fs.writeFile("demo1.txt",msg,(err)=>{
//     if(!err){
//         console.log("Data is Stored Successfully");
//     }
// })

//Append
fs.writeFile("demo1.txt",msg,{flag:"a+"},(err)=>{
    if(!err){
        console.log("Data is Stored Successfully");
    }
})