let fs = require("fs");
let customers = JSON.parse(fs.readFileSync("Customer.json"));
console.log("Number of customer "+customers.length);
customers.forEach(cust=> {
    console.log("id is "+cust.cid+" name is "+cust.cname+" Age is "+cust.age)
})
let cust1 = {cid:105,cname:"Mahi",age:28};
let result = customers.find(c=>c.cid==cust1.cid);
if(result==undefined){
    customers.push(cust1);
    fs.writeFileSync("Customer.json",JSON.stringify(customers));
    console.log("Record stored successfully");
}else {
    console.log("Customer id must be unique");
}