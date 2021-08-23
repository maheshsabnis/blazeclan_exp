// mymodule is a bootstrapping object 
// that represents the module implmentation
// along with all returned members of thye module
// the caller of mymodule need not to create an instance of mymodule
// it will be direcly loaderd and will p[rovide the facility to access methgods from the module
var mymodule =  (function(){
    var i = 0;
    console.log('I am IIFE i = ' + i);
    function square(x){
        return x*x;
    }

   
    console.log('Inside IIFE Square = ' + square(10));
    // all returned keys will be accessible outside
    // of the module
    return {
        fn:square
    }
})();

 