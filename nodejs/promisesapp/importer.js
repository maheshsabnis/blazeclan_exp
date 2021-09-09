const serviceClient = require('./externalcaller');

const options = {
    host: 'apiapptrainingnewapp.azurewebsites.net',  // the server name, IP address that is hosting the REST API
    path: '/api/Products',  //URL
    method:'GET', // HTTP Method GET / POST /PUT / DELETE
    //port:  // if the server accepts requests using the port
};


let obj =new serviceClient();
// subscribing the promise
obj.getData(options).then((resp)=>{
    console.log(`Received data =  ${resp}`);
}).catch((error)=>{
    console.log(`Received Error =  ${error}`);
});
