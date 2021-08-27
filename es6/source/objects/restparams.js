function sumValue(values){
    let sum = 0;
    if(values.length > 0){
        values.forEach((n,i)=>{
            sum+=n;
        });
    }
    return sum;
}
console.log(`2 Paramaters ${sumValue([2,3])}`);
console.log(`3 Paramaters ${sumValue([2,3,4])}`);
console.log(`4 Paramaters ${sumValue([2,3,4,5])}`);

console.log();
console.log('Using the Spread Operator');

function sumValueSpread(...values){
    console.log(JSON.stringify(arguments));
    let sum = 0;
    if(values.length > 0){
        values.forEach((n,i)=>{
            sum+=n;
        });
    }
    return sum;
}
console.log(`2 Paramaters ${sumValueSpread(2,3)}`); // agruments spread
console.log(`3 Paramaters ${sumValueSpread(2,3,4)}`);
console.log(`4 Paramaters ${sumValueSpread(2,3,4,5)}`);
