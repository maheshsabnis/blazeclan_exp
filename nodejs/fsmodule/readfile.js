// Load and Cache Module

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './../files/MyFile.txt');

// read file Synchronously
                        // Relative Path of the File, encoding
let data = fs.readFileSync(filePath, {encoding:'ascii'});
console.log(`Data = ${data}`);

// read file asynchronously
// callback is the function with following 2 parameters
// P1: error, if file has some issues the handle them
// P2: data: the data read from file
fs.readFile(filePath, {encoding:'ascii'}, (error,data)=>{
    if(error){
        console.log(`Error in Reading File ${error.message} `);
        return; // stop execution
    }
    console.log(`Data Read from File Asynchronously ${data}`);
});
for(let i=0;i<10;i++){
    console.log(i);
}

console.log('done');