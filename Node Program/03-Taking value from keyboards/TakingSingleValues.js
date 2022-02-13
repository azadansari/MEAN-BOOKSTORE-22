let obj = require("readline");

let abc = obj.createInterface({
        input:process.stdin,
        output:process.stdout
    });

abc.question("Enter the Name",(name)=>{
    console.log("Your name is "+name);

    abc.close();
});