const http= require('http');
const fs= require('fs');

//http => (request, response)
http.createServer((request, response)=>{
  const file= './WWW/myfile2.txt';
  fs.readFile(file,(err,data)=>{
    response.writeHead(200, {"Content.Type": "text/plain"});
    response.write(data);
    response.end();
  });
}).listen(4444);
