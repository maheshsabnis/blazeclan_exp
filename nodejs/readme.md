# Node.js
- Node.js Runtime
    - Host and Executes Node.js Apps
    - Each Application is a 'Module'
- Node.js Environment
    - Used to define and manage the dependencies for the current application
        - babel
    - Need a package.json        
- Module    
    - The Server-Side Logic that will be execute by the Node.js Runtime
    - Standard Node.js Modules
        - Installed when the Node.js is downloaded and installed 
        - USe these modules in the application code using
            - const [object] = require('[Module-Name]');
        - e.g.
            - fs, http, path, util, etc.
                - https://nodejs.org/dist/latest-v14.x/docs/api/    
    - External Node Modules downloaded from npmjs.com or github
        - Published by Community or Developer Team for specific Purpose
            - Express,  JsonWebToken, sequelize, node_sql, cors, etc.
            - npm install --save [MODULE-NAME]
    - Developer Designed/Create Node.js Modules
        - Our Application Code

# Programming with Node.js
- CReate  a package.json file
    - npm init -y
- Install @types/node module for intellisense
    - npm install --save-dev @types/json
- Use the Node.js module
    - const [variable] = require('[Module-Name]');
        - First Module will be searched from the Path where Node.js app is running    
            - if found, then will be loaded and then cached for throught lifecycle of the application
                - once it is cached, no matter how many files are loading it again, it will be used from cache only
                - e.g. Conside File1.js is loading X module, File2.js is using File1.js as a Custom Module and also loading X module 
                    - File1.js
                        - const x = require('X'); , this will load and cache X
                    - File2.js
                        - const f1 = require('File1.js');, this will load can cache File1 and hence X that is already Cached by File1.js    
                        - const y = require('X'); in File2.js, this will use X from already cached Module

- Using Standard Modules
    - The 'fs' module
            - used to create/read/update/delete files on the server
            - Create File
                - open(), executes as async. create a file if it does not exists
                - appendFile(), async method, file is created and if alread exists, it is appeded
                - writeFile(), async method, file is created if not exist and write data in it
                - writeFileSync(), sync method, rest same as writeFile()
            - Read File
                - readFile(), async method, read data from file
                - readFileSync(), sync method, rest like readFile()
            - Delete File
                - unlink(), async method
                - unlinkSync(), Sync method
            - Copy
                - copy(), copyTo(), async methods
            - Directories
                - mkdir() async method
                - readDir(), async method                
            - Practice to be followied while working with files and directories
                - Always read files and directories by referring the 'root path'
                    - The root path is specified using '__dirname' global variable of Node.js
                - Join the global server path of __direname with the 'path' module
                    - path.joins(__dirname, 'relative path')     
        - To Read Excel file
            - node-xlsx
            - Self Study
                - https://www.dotnetcurry.com/nodejs/1204/read-csv-file-using-nodejs fro CSV

# Assignments
# Date: 08-09-2021
1. REad about V8 Engine (Self-Study)
2. (Now), Read all file in s specific folder and its subfolders
3. Read Excel File (Show e tomorrow)                        