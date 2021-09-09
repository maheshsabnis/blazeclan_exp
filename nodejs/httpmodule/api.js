const http = require("http");

const emps = [
  { eno: 101, ename: "ABC", sal: 1100 },
  { eno: 102, ename: "DEF", sal: 1200 },
  { eno: 103, ename: "GHI", sal: 1300 },
  { eno: 104, ename: "JKL", sal: 1400 },
  { eno: 105, ename: "MNO", sal: 1500 },
  { eno: 106, ename: "PQR", sal: 1600 },
];

// create server
const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    // read the request header value
    let id = parseInt(request.headers.id);
    if (id === 0) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(emps));
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      let data = emps.find((e, i) => {
        return e.eno === id;
      });
      response.write(JSON.stringify(data));
      response.end();
    }
  }
  if (request.method === "POST") {
    // process the requested data from the Request Body

    // global declaration for curtrent method that will be used
    // to store the data
    let receivedData;

    // use the 'on()' method and then start receing the data
    // the callback function, willhave a parameter that is
    // chunk of data posted from the client
    request.on("data", (chunk) => {
      receivedData = JSON.parse(chunk);
    });
    // end the request and then process the data locally
    request.on("end", () => {
      emps.push(receivedData);
      response.end(JSON.stringify(emps));
    });
  }
  if (request.method === "PUT") {
    // read id from headers, based on that serach record in emps and update it
    // responded the updated data. If data is not found response error
  }
  if (request.method === "DELETE") {
    // read id from headers, based on that serach record in emps and delete it
    // responded the updated data. If data is not found response error
  }
});

// start listening
server.listen(9081);
console.log("Started on port 9081");
