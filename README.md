# JavaScript Features
1. JS FOundations
    - Variable Declarations
        - Variable Scope
            - The var is 'function-scope' declaratrion
            - Within a function from the declaratrion onwards, the var declared variable will be accessible 
``` javascript
function printValue(x){
    if(x == true) {
        var y =10;
        console.log('In If Condition y = ' + y);
    }
    console.log('Outside of If Condition y = ' + y);

}

printValue(true);
printValue(false);

```             
    - DataTypes
        - Methods for DataTypes
        - Number, consist of integer and Floating Point
        - String
            - This is a character enclosed in '' or ""
        - Date
            - The Standard Predefined Object of JavaScript to show dateand time based on culture of the browser
        - Boolean
        - Object
            - Array
            - Date
            - Object Literal aka JSON Object 
``` javascript
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



```
    - Using Operators
        - +,-,*,/
        - +=,-=,*=,/=
        - >,<, >=, <=
        - Equality Operators
            - ==, 
            - ===, 
            - !== 
    - Writing Simple Functions    
        - The 'function' is a reserve word
        - May have Input Parameters and output parameter
            - for the return type of the output paranmeter use the 'return' keyword
``` javascript
// 1. function w/o input and output parameters
function doWork(){
    console.log('No Parameters');
} 

// 2. Function with Input Parameter but not output parameter
function process(x){
    if(typeof(x) == 'number'){
        console.log(x*x);
    }
    if(typeof(x) == "string"){
        console.log(x);
    }
}

// 3. Function with Input Parameter and output parameter
function processData(x,y){
    if(typeof(x) == 'number' && typeof(y) == 'number'){
        return (x+x) + (2*x*y) + (y*y);
    }
    if(typeof(x) == 'string' && typeof(y) == 'string'){
        return x+y;  // default + operator is concatination
    }
}
```



