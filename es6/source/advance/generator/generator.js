// Collection with sequential data 
let myarray = [10,20,30,40,50,60,70];

// create a generator function

function* dataGenerator(start=0,end=Infinity,step=1){
    // simple iteration
    let record=0;
    for (let i=start;i<=end;i+=step){
        record++; // read a current index
        yield i; // return the current value of i and move next 
    }
    return record;
}

const generator = dataGenerator(myarray[0], myarray[myarray.length-1],step=20);
// get the first record and start reading the collection in sequence
let reader = generator.next();
while(!reader.done){
    console.log(`Record in Sequence is = ${reader.value}`);
    reader = generator.next(); // move next
}