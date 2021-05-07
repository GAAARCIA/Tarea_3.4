const http= require('http');
const fs = require('fs');

// http => (request, response)
// const data = fs.readFileSync('./WWW/file.txt');

// HTML CSS JS IMG AUDIO VIDEO

http.createServer((request, response)=>{
  console.log(request.url);
  const file = request.url == '/' ? './WWW/file.txt' : `./WWW${request.url}`;
  fs.readFile(file, (err,data)=>{
    if(err){
      response.writeHead(400, {"Content-Type" : "text/plain"});
      response.write("Not Found");
      response.end();
    }else{
      response.writeHead(200, {"Content-Type" : "text/plain"});
      response.write(data);
      response.end();
    }
  });
}).listen(4444);
