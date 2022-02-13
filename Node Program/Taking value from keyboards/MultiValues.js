let obj = require("readline");

let abc = obj.createInterface({
        input:process.stdin,
        output:process.stdout
    });

abc.question("Enter the ID",(id)=>{
    abc.question("Enter the name",(name)=>{
        abc.question("Enter the Age",(age)=>{
            console.log("ID is "+id);
            console.log("Name is "+name);
            console.log("Age is "+age);
            abc.close();
        })
    })
});