const http= require('http');
const fs = require('fs');

// http => (request, response)
// const data = fs.readFileSync('./WWW/file.txt');

// HTML CSS JS IMG AUDIO VIDEO

http.createServer((request, response)=>{
  console.log(request.url);
  const file = request.url == '/' ? './WWW/index.html' : `./WWW${request.url}`;

  if(request.url == '/login'){
    let data = [];
    request.on("data",value => {
      data.push(value);
    }).on("end",()=>{
      let params = Buffer.concat(data).toString();
      console.log(params);
      response.write(params);
      response.end();
    });
  }

  fs.readFile(file, (err,data)=>{
    if(err){
      response.writeHead(400, {"Content-Type" : "text/plain"});
      response.write("Not Found");
      response.end();
    }else{
      // "hola.como estas" => split(".").pop();
      const extension = file.split('.').pop();
      switch(extension){
        case 'txt':
          response.writeHead(200, {"Content-Type" : "text/plain"});
          break;
        case 'html':
          response.writeHead(200, {"Content-Type" : "text/html"});
          break;
        case 'jpeg':
          response.writeHead(200, {"Content-Type" : "image/jpeg"});
          break;
        case 'css':
          response.writeHead(200, {"Content-Type" : "text/css"});
          break;
        case 'js':
          response.writeHead(200, {"Content-Type" : "text/javascript"});
          break;
        default:
          response.writeHead(200, {"Content-Type" : "text/plain"});
      }
      response.write(data);
      response.end();
    }
  });
}).listen(4444);
