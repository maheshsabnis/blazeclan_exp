(function(){
    var i = 0;
    console.log('I am IIFE i = ' + i);
    function square(x){
        return x*x;
    }
    console.log('Inside IIFE Square = ' + square(10));
})();

 