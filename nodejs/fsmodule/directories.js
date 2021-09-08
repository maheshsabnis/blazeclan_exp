
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, './../files1');

fs.mkdir(dirPath, ()=>{
    console.log('Directory is created Successfully');
});

// read contents of the diretctory
// parameter 1: error, in case any error occures
// Parameter 2: Contents of the Directory e.g. Files, Subdirectories
fs.readdir(dirPath,(error,files)=>{
  if(error){
      console.log(`Error in Reading Directory ${error.message}`);
      return;
  }
  // iteratr over files
  files.forEach((file,i)=>{
      // check if the file is 'file object' or 'directory object i.e. sub-directory'
      // the 'stat()' method used to check path to iterate over
      fs.stat(`${dirPath}/${file}`, (err,stat)=>{
        if(err){
            console.log(`Error in Reading current file ${err.message}`);
            return;
        }
        // stat is the object to check if the current resource is file or directory and based on that
        // write the code
        if(stat.isFile()) {
            // print the file name
            console.log(`Current File Name is = ${file}`);
            // read contents of the file
            console.log(`Data from file is  = ${fs.readFileSync(`${dirPath}/${file}`)}`);
        }
      });
  });
});