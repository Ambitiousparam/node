/*const fs = require("fs");
const a = "sync write method"

console.log("hello mern stack internship i am coming  for you")
fs.writeFileSync("./sample.txt",a,()=> {
    console.log("written");
});
console.log("karan aujla ")
const path = require("path"); 

const a =path.extname("/nodejs/index.js");
console.log(a);
const path = require("path");
const a = path.dirname("E:/nodejslearning> node ./index.js");
console.log(a);
const path = require("path");
const b = "/6pp";
const a = path.join(E:/nodejslearning> node ./index.js+b);
console.log(a)
const os = require("os");
console.log(os.freemem());//shows the free memory
console.log(os.hostname());//shows the desktop name
console.log(os.totalmem());
console.log(os.freemem());
const http = require("http");
const pokemon = require("pokemon");
console.log(pokemon.all());
const pokemon = require("pokemon");
console.log(pokemon.random());*/
const fs = require("fs");

const http = require("http"); 
const Port = 4000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8")

const server = http.createServer((req,res)=>{
     if(req.url==="/"){
    return res.end(home);
     }
     if(req.url==="/about"){
       return  res.end("<h1>about page</h1>");
    }
    if(req.url==="/service"){
       return res.end("<h1>services page</h1>");
    }
    if(req.url==="/contact"){
      return  res.end("<h1>contact page</h1>");
    }
    else{
       return  res.end("<h1>page not found</h1>")
    }
});


server.listen(Port, hostname ,() => {
    console.log(`Server is working on http://${hostname}:${Port}`);
});












