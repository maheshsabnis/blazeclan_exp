const q = require('q');
const http = require('http');

class ServiceAccess {
    // options will be the host addeess
    getData(options){   
      // get the defer object to monitor the async operations
      let defer = q.defer();
      
      let receivedData; // data received from Call
      let request; // the current request    
      // if remore REST API server information is not passed the reject
      if(!options){
         defer.reject('Server Information is Missing');
      } else {
          // make call
          // parameter 2 is callback that contains the state of
          // response
          request = http.request(options, (response)=>{
             // start processing the response
             response.on('data',(chunk)=>{
                 receivedData+= chunk;
             });

             response.on('end',()=>{
                 try{
                    // if all is well the resolve
                    defer.resolve(JSON.stringify(receivedData));
                 }catch(ex){
                     // error ocured during the response
                     defer.reject(ex);
                 }
             });
          });  
      }
      // complete the request and release http request made to external REST API
      request.end();

      // return the promise object
      return defer.promise;
    }
}


module.exports = ServiceAccess;