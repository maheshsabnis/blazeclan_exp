// Subject
function Click(){
    this.handlers = []; // observers
}
// define an enhancements in the Subject that will 
// manage all subscribers to fire and event and then unsubscribe if needed
Click.prototype  ={
    // subscribe to an event using a handler function
    subscrice:function(fn){
        // add the handler in observers
        this.handlers.push(fn);
    },
    // unsubscribe to an event and release handler function
    unsubscribe:function(fn){
        // iterate over all handlers in the observer
        // and process them
        this.handlers = this.handlers.filter((item)=>{
            if(item !== fn){
                console.log('====================================');
                console.log(`In Subscribe ${item}`);
                console.log('====================================');
                return item;
            }
        });
    },
    // monitor or observe what is returned once the handler fucntion is executed by subject
    fire:function(value,object){
        let containerScope = object || window; // the scope object under whihc the subject will be executed     
        // call is a JavaScript Standard object that is used to 
        // invoke an execute the function on the object
        // item is a handler function  in observers array
        // containerScope, is an object for which the 'item' will be invoked
        // value, the value or input parameter passed to the item function
        this.handlers.forEach((item)=>{
            item.call(containerScope,value);
        });
    }
}; 


function Client(){
    // deferin a handler function implementation
    var clickHandler = function(item){
        console.log('====================================');
        console.log(`Event Fired ${item}`);
        console.log('====================================');
    };
    // define an instance of the SUbject
    var click = new Click();

    click.subscrice(clickHandler);
    click.fire("The First Event #1");
    click.unsubscribe(clickHandler);
    click.subscrice(clickHandler);
    click.fire("The Second Event #2");
    click.unsubscribe(clickHandler);
    click.subscrice(clickHandler);
    click.fire("The Third Event #3");
    click.unsubscribe(clickHandler);
}

Client();