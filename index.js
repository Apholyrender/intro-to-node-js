const http = require("http");
const fs = require("fs").promises;
const port = 8000;
const app = http.createServer((req, res) => {switch(req.url){
    case "/": fs.readFile(__dirname + "/index.html").then((content => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(content) 
     })).catch((err) => { 
       res.writeHead(500) 
       res.end(err); 
       return; 
    }) 
    break 
    case "/about": 
    fs.readFile(__dirname + "/about.html").then((content => { 
     res.setHeader("Content-Type", "text/html"); 
     res.writeHead(200); 
     res.end(content) 
   })).catch((err) => { 
     res.writeHead(500) 
     res.end(err); 
     return; 
   }) 
   break 
   case "/contact": 
   fs.readFile(__dirname + "/contact.html").then((content => { 
    res.setHeader("Content-Type", "text/html"); 
    res.writeHead(200); 
    res.end(content) 
  })).catch((err) => { 
    res.writeHead(500) 
    res.end(err); 
    return; 
  })}});

  app.listen(port);

console.log(`app is listening on port ${port}`);