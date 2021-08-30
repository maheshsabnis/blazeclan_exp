class SimpleClass {
    // defining the private membefr
    #privateValue=0;
    // defining public members in constructor()
    constructor(a,b){
        this.x = a;
        this.y = b;
        // lets initialize theprivate member
        this.#privateValue = a;
    } 

    // public method
    squareAdd(){
        return (this.x*this.x) + (this.y*this.y);
    }

    // private method
    #checkValue(){
        if(this.#privateValue <=0){
            return false;
        }
        return true;
    }

    getPower(x){
        if(!this.#checkValue()){
            this.#privateValue = 1;
            return Math.pow(this.#privateValue,x); // return 1
        }else{
            return Math.pow(this.#privateValue,x);
        }
    }

    static getSquareRoot(x){
        return Math.sqrt(x);
    }

    // defining properties

    // setter property to ser value of the Private variable
    set privateValue(v){
        this.#privateValue =v;
    }
    // return value of the private variable
    get privateValue(){
        return this.#privateValue;
    }

}

let obj = new SimpleClass(0,200);
console.log(`Square add = ${obj.squareAdd()}`);
console.log(`Get Power ${obj.getPower(3)}`);
obj.privateValue = 500;
console.log(`Private Value =  ${obj.privateValue}`); 
console.log(`Sqyuer root of 100 is = ${SimpleClass.getSquareRoot(100)}`);