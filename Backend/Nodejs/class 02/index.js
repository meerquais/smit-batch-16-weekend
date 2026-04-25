// const user = "Meer";

// console.log(user);

// const fs = require("fs");

// const data = fs.readFileSync("./text.txt" , "utf-8");

// console.log(data);

// console.log("Next line");

// fs.readFile("./text.txt" , "utf-8" , (error , data)=>{
//       console.log(data);

// });

// console.log("Next line");

// fs.writeFileSync("file.txt", "This was created using node.js");
// fs.writeFileSync("./text.txt" , "this was also created using node.js");

// fs.appendFileSync("./text.txt" , "This was added using append system!");

const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/") {
    res.end("This is Home Page!");
  } else if (pathName === "/about") {
    res.end("<h1 style='color:blue;'>This is About Page!</h1>");
  } else if (pathName === "/contact") {
    res.end("<h1 style='color:red;'>This is contact page</h1>");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("404 page not found!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running!");
});
