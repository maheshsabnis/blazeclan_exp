// using for..of loop
let arr = [10,20,30,40,50];
console.log('Using for..loop');
for(let i=0;i<arr.length;i++){
    console.log(`For..loop value = ${arr[i]}`);
}
console.log();
console.log('Using for..in loop');
for(let i in arr){
    console.log(`For..loop value = ${arr[i]}`);
}
console.log();
console.log('Using for..of loop');
// Iterating over the array till End-Of-Record not found
for(let n of arr){
    console.log(`Value = ${n}`);
}