class MyAbstract {
    #pValue = '';
    constructor(val){
        this.#pValue = val;
        // if the instanceis of type MyAbstarct t5hen throw error
        // to prevent an instancde creation
        if(new.target === MyAbstract){
            throw new TypeError('The MyAbstract class can not be instantiated');
        } 
    }
    baseMessage(msg){
        console.log(`I am a method from Abstract class ${msg} and ${this.#pValue}`);
    }
}

 
class DeriveClass extends MyAbstract {
    #dVal='';
    constructor(message){
        super(message); // call the base class constructor
        this.#dVal = message;
    }

    deriveMessage(){
        console.log(`Ther Message = ${this.#dVal}`);
    }
}

let obj = new DeriveClass('Hello');

 obj.baseMessage('I am Base');
 obj.deriveMessage();
