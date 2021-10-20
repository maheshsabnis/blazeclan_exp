let Singleton =(function(){
    let instance;

    // internal scope function, that wil return the instance
    function createInstance(){
        let object = new Object("I am instantiated");
        return object;
    }

    return {
        // public scope function, that will check if the instance
        // is created
        getInstance : function(){
            // create an instance if not already created
            // else return the same instance
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let o1 = Singleton.getInstance();
let o2 = Singleton.getInstance();

console.log('====================================');
console.log(`Ate they Same? ${o1 === o2}`);
console.log('====================================');