let fs = require("fs");
//literal style user-defined object
let customer = {cid:100,cname:"Ramesh",age:21};
fs.writeFileSync("Customer.json",JSON.stringify(customer),{flag:"a+"});
console.log("Customer Record Stored");