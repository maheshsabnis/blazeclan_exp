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
      "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
    );
    http.send();
  });
 
}




function getDataWithPromiseNew() {
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
        "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
      );
      http.send();
    });
   
  }


// the method will return the promise object
function postDataWithPromise(product) {
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
        "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
      );
      // set the header MIME Types
      http.setRequestHeader("Content-Type", "application/json");
      // send data in body as JSON
      http.send(JSON.stringify(product));
    });
   
  }

// PUT Request to update
//  http.open(
//     "PUT",
//     "https://apiapptrainingnewapp.azurewebsites.net/api/Products/{ProductRowId}"
//   );



// DELETE Request to delete
//  http.open(
//     "DELETE",
//     "https://apiapptrainingnewapp.azurewebsites.net/api/Products/{ProductRowId}"
//   );
