// Each Array is by default an Instance of Array<T> class
let names = ["Mahesh", "Tejas","Ramesh", "Pushkar", "Leena", "Neeta", "Neema", "Ajay", "Ram", "Nandu", "Anil", "Keshav","Abhay", "Jaywant","Anil", "Shyam","Shweta"];
// Iteratr over the array

// create a function, thet will be passed as callback parameter to the forEach
// explicit callback function
function printValues(n,i){
    console.log(`Value at index ${i} is = ${n}`);
}
// passing function as input parameter to other function
names.forEach(printValues);

// Simplyfy the syntax by passing implementation to a method
console.log();
console.log('DO not use explicit callback function');
names.forEach(function(n,i){
    console.log(`Value at index ${i} is = ${n}`);
});

// USing Arrow Operator
console.log();
console.log('Using Arrow Operator');
names.forEach((n,i)=>{
    console.log(`Value at index ${i} is = ${n}`);
});

// Using map()
console.log();
console.log('Using map()');
names.map((n,i)=>{
    console.log(`Value at index ${i} is = ${n}`);
});