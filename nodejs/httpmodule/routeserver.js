const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./../views");

// create server
const server = http.createServer((request, response) => {
  // read the URL propety of the request object and based on the value of URL
  // read file from server and respond it
  if (request.url === "/home") {
    // read the file and respond
    fs.readFile(`${filePath}/home.html`, (error, file) => {
      if (error) {
        response.writeHead(401, { "Content-Type": "text/html" });
        response.write("Resource You are Looking For is not available");
        response.end();
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      // file will be opend on the server and its contents will be responded
      response.write(file);
      response.end();
    });
  } else {
    if (request.url === "/about") {
      // read the file and respond
      fs.readFile(`${filePath}/about.html`, (error, file) => {
        if (error) {
          response.writeHead(401, { "Content-Type": "text/html" });
          response.write("Resource You are Looking For is not available");
          response.end();
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        // file will be opend on the server and its contents will be responded
        response.write(file);
        response.end();
      });
    } else {
      if (request.url === "/contact") {
        // read the file and respond
        fs.readFile(`${filePath}/contact.html`, (error, file) => {
          if (error) {
            response.writeHead(401, { "Content-Type": "text/html" });
            response.write("Resource You are Looking For is not available");
            response.end();
          }
          response.writeHead(200, { "Content-Type": "text/html" });
          // file will be opend on the server and its contents will be responded
          response.write(file);
          response.end();
        });
      } else {
        response.writeHead(401, { "Content-Type": "text/html" });
        response.write("Resource You are Looking For is not available");
        response.end();
      }
    }
  }
});

// start listening
server.listen(9080);
console.log("Started on port 9080");
