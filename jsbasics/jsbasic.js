// declare a variable. The 'var' is a keyword used to declare a variable
// default datatype of the variable, if not assigned with default value, will be 'any'
// typeof() is an Operator
var x;
x = 10;  // number
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = 'Mahesh';  // string
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = "Sabnis"; // string
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = 700.56; // number
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = true; // boolean
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);

// Complex Objects in Variable

// 1. The Object Literal aka JSON object. The data will be stored in Key/Value
x = {}; // Empty Literal
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// add literal properties in EMpty Object
x.FirstName = "James";
x.LastName = "Bond";
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x.FirstName + ' ' + x.LastName);

// 2. The Object with Predefined Schema in Object Literal
x = {id:101,name:'A'};
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x.id + ' ' + x.name);
// 3. Define Date
x = new Date();
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// Pass explicit values to date object
// Parameters to the Date Object
// P1: Year 
// P2: Month, starts from 0 (January)
// P3: Date
x = new Date(2021, 7, 17);
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// 3 Array Object
x = []; // Empty Array
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = [1,2,3,4,5,6,7]; // default Data
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// a Complex Array consit of hetrogeneous data entries
x = [10,20,10.3,45.7, 'A', 'B', 'C', {id:9,name:'SSD'}, [4,5,67]];
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);


