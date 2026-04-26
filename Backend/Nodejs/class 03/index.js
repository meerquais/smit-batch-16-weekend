// const user = "Meer";

// console.log(user);


const http = require("http");
const name = require("./file1");

// const server = http.createServer((req,res)=>{
//   // res.end("hello from server!");
//   if(req.url === "/"){
//     res.end("Home Page")
//   }else if(req.url === "/about"){
//     res.end("About Page")
//   }else{
//     res.end("404 Page Not Found")
//   }
// })



// const server = http.createServer((req,res)=>{
  
//   res.end(`Method: ${req.method}`)
  
// })


// const server = http.createServer((req,res)=>{
 

//     if(req.url === "/users"){
//       res.setHeader("Content-Type" , "application/json");
//       res.end(JSON.stringify([
//         {name:"Meer",age:26},
//         {name:"minhaj" , age :25}
//       ]));
//     }


// });


// HTTP METHODS

// GET => Data lena
// POST => Naya Data bejna
// PUT => Update data
// DELETE => data remove karna

// GET

// let users = ["Ali" , "Minhaj"];

// const server = http.createServer((req , res )=>{
//   if(req.method === "GET"){
//     res.end(JSON.stringify(users))
//   }
// })


// POST

// let users = [];

// const server = http.createServer((req,res)=>{
//   if(req.method === "POST"){
//     users.push("New User");
//     res.end("User Added")
//   }else{
//     res.end("no data")
//   }
// })


// server.listen(3000)


// const server = http.createServer((req,res)=>{
//   res.write("Part 1\n");

//   setTimeout(()=>{
//     res.write("Part 2\n")
//   }, 1000);

//   setTimeout(()=>{
//     res.end("done")
//   }, 2000)

// })
// server.listen(3000)


// const fs = require("fs");

// const server = http.createServer();

// server.on("request" , (req, res)=>{
// const readable = fs.createReadStream("test-file.txt");
// readable.pipe(res)

// // readable.on("data" , (chunk)=>{
// //     res.write(chunk);
// // })
// // readable.on("end" , ()=>{
// //   res.end();
// // })
// // readable.on("error" , (error)=>{

// //   console.log(error);
// //   res.statusCode = 500;
// //   res.end("File not found!")
  
// // })

// })


// server.listen(3000)


// console.log(name);



const express = require("express");

const app = express();



// app.get("/",(req , res)=>{

//   res.send("<h1>Home Page</h1>")
// })


// app.get("/about" , (req,res)=>{
//     res.send("<h1>About Page</h1>")
// })


// app.get("/contact" , (req,res)=>{
//   res.send("<h1>contact Page</h1>")
// })





// app.listen(5000, ()=>{
//   console.log("Server running on port 5000");
// })



// app.get("/dahi-bade" , (req,res)=>{
//   res.send("ye lo apke dahi bade");
// });

// app.get("/chole" , (req,res)=>{
//   res.send("ye lo apke chole");
// });

// app.get("/pani-puri" , (req,res)=>{
//   res.send("ye lo apke pani aur puri");
// })

// app.listen(7777);

// dynamic route

// app.get("/product/:name" , (req, res)=>{
//   res.send(`Product: ${req.params.name}`)
// });

// query params


app.get("/order" , (req,res)=>{
  const item = req.query.item;
  const qty = req.query.qty;


    res.send(`Order: ${item}, Quantity: ${qty}`);


})



app.listen(3000)