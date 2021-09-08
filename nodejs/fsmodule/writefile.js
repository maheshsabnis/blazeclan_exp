const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './../files/MyFile1.txt');

// using open()
// w, create a file if not exist and make it ready for Writing
// if file is already present then it is ignored and opened for writing
fs.open(filePath, 'w', (error, status)=>{
    if(error){
        console.log(`Error in Writing File ${error.message} `);
        return; // stop execution
    }
    console.log(`File is created successfully ${status}`);
});


// write the file

fs.writeFileSync(filePath, 'I am written SYnchronously');
console.log('done');

// async Write
// if the file has data then it will be overwrriten
// fs.writeFile(filePath, 'I am written Asynchronously', ()=>{
//   console.log(`Data is Written Successfully`);
//   let d = fs.readFileSync(filePath, {encoding:'ascii'});
//   console.log(`Data from the file is  = ${d}`);
// });

// append data in file
fs.appendFile(filePath, 'I am appended',()=>{
    console.log(`Data is appended Successfully`);
    let d = fs.readFileSync(filePath, {encoding:'ascii'});
    console.log(`Data from the file is  = ${d}`);
});

// delete the file
fs.unlink(filePath, ()=>{
    console.log('File is deleted Successfully');
});
