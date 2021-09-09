const http = require('http');

// create server
const server = http.createServer((request,response)=>{
    // write HTP Header (Status-Code, MIME-TYPE)
    response.writeHead(200, {'Content-Type': 'text/html'});
    // HTTP Response Body
    response.write('Hello, I am a HTTP Server');
    // ENd the response
    response.end();
});



// start listening
server.listen(9080); 
console.log('Started on port 9080');