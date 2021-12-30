// server creation and api creation 


// const http = require("http");

// http.createServer((req,resp)=>{


//    if(req.url ==="/"){

//     resp.end("at home ")

//    }else if(req.url ==="/about"){

//      resp.end("at about")

//    }else{

//     resp.writeHead(404,{"content-type":"text/html" })
//     resp.end("<h1>404 error </h1>")

//    }

// }).listen(8000,()=>{

//     console.log("working");
// })


//  const data=JSON.stringify(profile)



//  const fs = require("fs");

//  fs.writeFile("json1.json",data,(err)=>{

//     console.log(err);
//  })

//  fs.readFile("json1.json","utf-8",(err,data)=>{

//                const Data=JSON.parse(data)
//                console.log(`name is ${Data.name}`);

//  })


let http = require("http");

let fs = require("fs");

var data1
fs.readFile("json1.json","utf-8",(err,data)=>{

   data1 = JSON.parse( data)
  })

http.createServer((req,resp)=>{


   if(req.url === "/"){

      resp.end("in Home ")

   }else if(req.url === "/about"){

      resp.end("in about ")
   }else if(req.url === "/userdata"){

      resp.writeHead(200,{"content-type": "application/json" })

      resp.end(data1[0].name)
     
  
   }  else{

      resp.writeHead(404,{"content-type":"text/html"})
      resp.end("<h1>404 not found</h1>")
   }

}).listen(8000,()=>{

   console.log("working");
})