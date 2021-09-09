const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './../views');

// create server
const server = http.createServer((request,response)=>{
     // read the file and respond
     fs.readFile(`${filePath}/home.html`, (error,file)=>{
         if(error){
             response.writeHead(401, {'Content-Type': 'text/html'});
             response.write('Resource You are Looking For is not available');
             response.end();
         }
         response.writeHead(200, {'Content-Type': 'text/html'});
         // file will be opend on the server and its contents will be responded
         response.write(file);
         response.end();
     });
});



// start listening
server.listen(9080); 
console.log('Started on port 9080');