let TargetObject = {
    message: 'I am a property from Target object'
};

class MyCalss {
    constructor(){
        this.data = 'I am from Class';
    }
}

// handl;er with no traps
const handler = {};

// create a Proxy
const proxy = new Proxy(TargetObject, handler);
const pxy = new Proxy(new MyCalss(),handler);

// create a comsumer 
function Consumer(){
    console.log('The Consumer');
    console.log(`Message = ${proxy.message}`);
    console.log(`${pxy.data}`);
}

// call consumer
Consumer();