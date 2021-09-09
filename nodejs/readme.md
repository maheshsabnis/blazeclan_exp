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
    - The 'http' module
        - USed to perform following Operations on Node.js Server-Side Apps
            - USed to Accept and Process HTTP Requests by exposing the Server on Port
                - methods
                    - createServer(RequestListener)
                        - RequestListener object
                            - IncommingMessage Object, the reqest Stream             
                            - ServerResponse Object, the response Stream
                        - Accept Files
                        - Accpt Data from Client
                        - Respond Data
                        - Open File on Server and respond its contents
                    - ServerResponse methods
                        - writeHead()
                            - Write Headers
                        - write()
                            - Response Message or Response Message Content
                                - Data (Text/HTML/JSON)
                                - Data from File
                                - File as Data
                                    - Open HTML file on server and reda its HTML COntent and respond it back to the Client
                        - end()  
                            - Close or release the HTTP Request
                    - InCommingMessage Methods
                        - on('[Event]', callback)
                            - Event: 'data': Data is beiong received, 'end': receiving of data end, 'pause': pause the data receiving operation, 'resume': resume data receiving, 'error': Error in COmmunication
                        - Represents HTTP Request Mesage as stream
                             - Porperties for
                                - Reading headers
                                    - request.headers.[AUTHORIZATION], [CUSTOM-HEADER]
                                - Read methods
                                    - GET / POST / PUT / DELETE
                                    - request.method
                                - Read URL
                                    - request.url             
                    - listen(PORT)
                        - Expose the server on the PORT for listing requests and generate responses
                    - request([options], callback)
                        - uses to make call to other REST API from Node.js application
                        - Options: Details of the REST API to which call will be made     
                - Advantages of http Module
                    - CReate a Web Server, to accept request and responds HTML files
                    - Create REST APIs
                    - Act as a bridgr between the Client App and Third-Party REST APIs     

- To keep the JS file running on server irrespective of chjanges, use the 'nodemon' package and install it in global scope
        - npm install -g nodemon
        - nodemon [FileName].js

# Using Promises in Node.js
- To Handle Async Operations in Node.js app, use 'Promise' library
    - The 'q'
        - Has the 'defer()' function, 
            - Used to Monitor the Asynchronous Execution
                - resolve(), will be invoked when the execution is successful
                - reject(), will be invoked for failed execution
                - promse, property, that will be providing the subscription to Node.js app (Thread on which the code is executing) 
        - npm install --save q        
    - The 'bluebird'
- Generally write the Async code in seperate Node.js  'Custom Module'
    - The custom module is a JavaScript file, that contains the 'exportable' functionality
        - e.g. In File1.js, module.exports = {.........[LOGIC].........};
        - In File2.js,  let obj = require('File1.js') 
    - If a custom module contains the class
        - class MyClass{......} , in classfile.js
        - module.exports = MyClass;
        - Imports the module having the class
            - let obj = require('classfile.js');
                - The 'obj' represents the imported MyClass
            - Instantiate the MyClass as
                - let o1 = new obj();      

# Assignments           
# Date: 08-09-2021
1. REad about V8 Engine (Self-Study)
2. (Now), Read all file in s specific folder and its subfolders
3. Read Excel File (Show e tomorrow)       

# Date: 09-09-2021
1. Create a Map() that will act as a Route Table    
        - IN this Map(), key will be URL and Value will be html Page against the URL
        - Modify the routeserver.js code, in suach a way that , based on the URL received from the Request, serach it in Map() and once the URL match with the Key of Map, the value of the key that is the HTML page must be responded
2. Create a HTTP Server that will be hosted on PORT 9080 and perform the operations in it
    - This server will acepts request in URL as '/UI', this will return, UI.html to browser
    - This server will have http methods (as shown in api.js) for GET/POST/PUT/DELETE operations for Products data
    - The UI.html will contains JavaScript code, that uses the XmlHttpRequest object to make call to the HTTP methods for perfoming Data Read/Write operations [GET/POST/PUT/DELETE]        
3. USe Promises for Making the POST request using http.request() method to REST API
    - https://www.dotnetcurry.com/nodejs/1242/promises-nodejs-using-q-goodbye-callbacks
    - https://www.dotnetcurry.com/nodejs/1225/call-external-service-using-nodejs
    

