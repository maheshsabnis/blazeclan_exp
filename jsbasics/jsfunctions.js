// 1. function w/o input and output parameters
function doWork(){
    console.log('No Parameters');
} 

// 2. Function with Input Parameter but not output parameter
function process(x){
    if(typeof(x) == 'number'){
        console.log(x*x);
    }
    if(typeof(x) == "string"){
        console.log(x);
    }
}

// 3. Function with Input Parameter and output parameter
function processData(x,y){
    if(typeof(x) == 'number' && typeof(y) == 'number'){
        return (x+x) + (2*x*y) + (y*y);
    }
    if(typeof(x) == 'string' && typeof(y) == 'string'){
        return x+y;  // default + operator is concatination
    }
}