function doWork(x){
    if(x){
        let y = 10; // scope to if..block
        console.log('In if COndition y = ' + y);
    }
    console.log('Out of if COndition y = ' + y);
}

console.log('For True');
doWork(true);
console.log('For False');
doWork(false);
