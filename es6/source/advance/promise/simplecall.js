function getData(){
    console.log(`Calling the REST API`);
    let products = [];
    let http = new XMLHttpRequest();
    // subscribe to expected succssful response
    http.onload = function(){
        console.log(`Received Response is = ${http.response}`);
        products = http.response;
    } 
    // subscribe to expected error response
    http.onerror= function(e){
        console.log(`Error Occured ${e}`);
    }
    // setting async: false, means the call wil be synchronous
    http.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    http.send();

    for(let i=0;i<400;i++){
        console.log(`HahaHihihhooo`);
    }

    console.log(`Call is over an returning`);
    return products;
}