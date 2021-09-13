// the method will return the promise object
function getDataWithPromise() {
    return new Promise((resolve,reject)=>{
      let http = new XMLHttpRequest();
      // subscribe to expected succssful response
      http.onload = function () {
          // if successful execute the resolve
          resolve(http.response);
      };
      // subscribe to expected error response
      http.onerror = function (e) {
       reject(`Error Occured ${e}`);
      };
      // setting async: false, means the call wil be synchronous
      http.open(
        "GET",
        "http://localhost:9081/api/customers"
      );
      http.send();
    });
   
  }
  
  
   
  
  // the method will return the promise object
  function postDataWithPromise(cust) {
      return new Promise((resolve,reject)=>{
        let http = new XMLHttpRequest();
        // subscribe to expected succssful response
        http.onload = function () {
            // if successful execute the resolve
            resolve(http.response);
        };
        // subscribe to expected error response
        http.onerror = function (e) {
         reject(`Error Occured ${e}`);
        };
        // setting async: false, means the call wil be synchronous
        http.open(
          "POST",
          "http://localhost:9081/api/customers"
        );
        // set the header MIME Types
        http.setRequestHeader("Content-Type", "application/json");
        // send data in body as JSON
        http.send(JSON.stringify(cust));
      });
     
    }
  
   