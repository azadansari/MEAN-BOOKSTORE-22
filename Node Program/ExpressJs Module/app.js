// load module
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
const { is } = require("express/lib/request");

loginDetails = [];
loginDetails = JSON.parse(fs.readFileSync("login.json"));

// we have to create the reference of express module
let app = express();

//adding middlewear
app.use(bodyParser.urlencoded({extended:true}));
app.get("/sayHello",(req,res)=>{
    res.send("Welcom Simple Express JS Application");
})
app.get("/aboutus",(req,res)=>{
    res.send("Welcom To About Us Page");
})
app.get("/contactus",(req,res)=>{
    res.send("Welcom To Contact Us Page");
})
app.get("/info",(req,res)=>{
    res.send("<font color=red>Welcome to Express Js</font>");
})

app.get("/sample",(req,res)=>{
    // res.sendFile(sample.html);
    // res.sendFile("E:\\Simplilearn- Full Stack MEAN Developer\\01-Live Classes\\Git Practices\\MEAN-BOOKSTORE-22\\Node Program\\ExpressJs Module\\sample.html");
    // res.send(__dirname);
    res.sendFile(__dirname+"\\sample.html");
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html");
})
app.get("/loginGet",(req,res)=>{
    res.sendFile(__dirname+"\\loginGet.html");
})

app.get("/loginPost",(req,res)=>{
    res.sendFile(__dirname+"\\loginPost.html");
})

app.get("/checkUser",(req,res)=>{
    let email = req.query.email;
    let pass = req.query.pass;
    let result = loginDetails.find(ll=>ll.email==email && ll.pass==pass);
    // if(email=="Azad@gmail.com" && pass=="123"){
    if(result!=undefined){
        res.send("Successfully Login");
    }else{
        res.send("Failure try once again");
    }
})

app.post("/checkUser",(req,res)=>{
    let login = req.body;
    console.log(login)
    // res.send("Post method Called");
    let result = loginDetails.find(ll=>ll.email==login.email && ll.pass==login.pass);
    // if(login.email=="Azad@gmail.com" && login.pass=="123"){
        if(result!=undefined){
        res.send("Successfully Login");
    }else{
        res.send("Failure try once again");
    }
})

app.get("/signUpOpenPage",(req,res)=>{
    res.sendFile(__dirname+"\\signUp.html");
})
app.post("/signUp",(req,res)=>{
    let login = req.body;
    if(loginDetails.length>0){
        let result = loginDetails.find(ll=>ll.email==login.email);
        if(result==undefined){
            loginDetails.push(login);
            fs.writeFileSync("login.json",JSON.stringify(loginDetails));
            res.send("Account Open Successfully");
        }else{
            res.send("Email must be unique");
        }

    }else{
        loginDetails.push(login);
        fs.writeFileSync("login.json",JSON.stringify(loginDetails));
        res.send("Account Created successfully");
    }
})

app.listen(9090,()=>console.log("Server Running on port number 9090"))