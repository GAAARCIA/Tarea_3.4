const http= require('http');
const fs= require('fs');

const data= fs.readFileSync('./WWW/myfile.txt');
//http => (request, response)
http.createServer((request, response)=>{
      response.writeHead(200, {"Content.Type": "text/plain"});
      response.write(data);
      response.end();
}).listen(4444);
