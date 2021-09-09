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
});

// start listening
server.listen(9081);
console.log("Started on port 9081");
