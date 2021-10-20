var module = (function(){
    // contents of module are not accessible outside
    var x = 10;
    y = 0 ; // undefined
    function first(){
        console.log('====================================');
        console.log(` In FIrst x = ${x}`);
        console.log('====================================');
        x++;
    }
    function cat(){} // unused
    function second(){
        console.log('====================================');
        console.log(` In Second x = ${x}`);
        console.log('====================================');
        x++;
    }
    
    // make the contents of the module as public exposed definitions
    return {
        fnFirst:first,
        fnSecond:second
    };

})();

module.fnFirst();
module.fnSecond();
