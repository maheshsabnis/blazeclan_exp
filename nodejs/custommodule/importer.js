const mdl = require('./mymodule');
const operations =  require('./classmodule');

console.log(`Power is = ${mdl.power(2,3)}`);
console.log(`SQRT is = ${mdl.sqrt(4)}`);

// Define an instance

let obj = new operations();
console.log(`Upper ${obj.upper('Mahesh')}`);