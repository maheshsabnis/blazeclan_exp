// testing calls to REST APIs
// define an expect object that will be used to
// execute test assertion by comparing
// actual and expected values**
const expect = require("chai").expect;
const request = require("request");

const instance = require('./../service');

// arrange a test data
let data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
describe("Test Suite for the Node.js Expres REST APIs", () => {
  it('should return the status code as "200" ', (done) => {
    // arrange: Define values sedn to REST using header, url, body paramaters

    // act
    // error: The Comminucation error object
    // response: The response header
    // body: response body
    request("http://localhost:9080/api/message", (error, response, body) => {
      // assertion
      expect(response.statusCode).to.equal(200);
      // complete the call
      done();
    });
  });

  it('should return the body as "Hello World" ', (done) => {
    // arrange: Define values sedn to REST using header, url, body paramaters
    let expected = "Hello World";
    // act
    request("http://localhost:9080/api/message", (error, response, body) => {
      expect(body).to.equal(expected);
      done();
    });
  });

  it("should return the body as data with collection of records ", (done) => {
    let expected = data;
    request("http://localhost:9080/api/data", (error, response, body) => {
      expect(body).to.equal(JSON.stringify(expected));
      done();
    });
  });

  it("should return the status code as 500 when the URL Parameter is 0", (done) => {
    let expectedStusCode = 500;
    let id = 0;
    request(`http://localhost:9080/api/data/${id}`, (error, response, body) => {
      expect(response.statusCode).to.equal(expectedStusCode);
      done();
    });
  });

  it("should return 3 records when the POST operation is successful", (done) => {
    let postData = { id: 3, name: "C" };
    let expectedRecordCount = 3;
    request.post(
      `http://localhost:9080/api/dataPost`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      },
      (error, response, body) => {
        // JSON.parse() : will convert the JSON string into JavaScript object
        expect(JSON.parse(body).length).to.equal(expectedRecordCount);
        done();
      }
    );
  });
});
