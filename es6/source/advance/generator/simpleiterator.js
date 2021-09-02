// Collection with sequential data 
let myarray = [10,20,30,40,50,60,70];

// Custome Iterator to create and returns sequential data from the collection
function rangeIterator(start=0,end=Infinity, step=1){
    // reyurn an object that will contain followin gproperties
    // value: Data  fromm the Sequence, done: flag to check if more records are present in sequence

    // write the logic with the iteration
    let nextIndex  =start; // first record to read
    let iterationCount=0; // the increament index of each record in collection

    // create an Iterator Object
    // Read,Return aned Move Next
    const dataIterator = {
        next:function(){
            let result;
            if(nextIndex<=end){
                console.log(`Current Index is = ${nextIndex}`);
                // set the result as the currently raad record
                result = {value:nextIndex,done:false}; // done:false, means collection still have records in sequence
                // increament the sequence counter based on step
                nextIndex+=step;
                console.log(`After Increment the new record is = ${nextIndex}`);
                // increament the index of the colection so thatit5 can reach to last record in collection
                iterationCount++;
                return result; // the currently read value from collection 
            }
            // return the iterator with final value
            return {value:nextIndex,done:true};
        }
    }; 

    return dataIterator;
}


// Using Iterator
                                // start:10, end:70, step:10
let iteratorReader = rangeIterator(myarray[0], myarray[myarray.length-1],30);
// call the next() method on iterator to initialize the itaretion to start from the first record
let currentRecord = iteratorReader.next();
// start itarating
while(!currentRecord.done){
    console.log(`The CUrrent Value in Sequence  is = ${currentRecord.value}`);
    // go to next recorrd of th collection
    currentRecord = iteratorReader.next();
}

