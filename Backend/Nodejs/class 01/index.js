// const os = require("os");

// console.log(os.platform())
// console.log(os.totalmem())


const fs = require("fs");

// create file 

fs.writeFileSync("node.txt" , "Hello This file was created using nodejs");

const data = fs.readFileSync("node.txt" , "utf-8");

console.log(data);

