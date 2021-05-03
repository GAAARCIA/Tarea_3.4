const http= require('http');
const fs= require('fs');

//http => (request, response)
http.createServer((request, response)=>{
  console.log(request.url);
  const file = request.url=='/'? './file.txt': `.${request.url}`;
  fs.readFile(file, (err,data)=>{
    if(err){
      response.writeHead(400, {"Content.Type": "text/plain"});
      response.write("not found");
      response.end();
    }else{
      response.writeHead(200, {"Content.Type": "text/plain"});
      response.write(data);
      response.end();
    }
  });
}).listen(4444);
