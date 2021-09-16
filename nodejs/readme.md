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

- Using Express
    - Using teh Web Server Capabilities
        - CReating a server with Static Pages Responses
        - get(), post(),put(), delete() methods of Express for REST APIs
            - Parameter 1: the URL
            - Parameter 2: RequestHandler
        - Read the request headers for following
            - Reading AUTHORIZATION HEADERS
            - Reading Accept_Language, Versions, etc.
    - Configuring Middlewares
        - Route, CORS, Body-Parser, JSON Fromatter, Session, Security, Static etc.
        - The 'use()' method is used to configure middleware in a request pipeline
        - If the HTML file is rendered to client using JS or CSS reference then configure the Static Middleware iun Express
        - To parse the data received from the Body, add the JSON() and urlEncoded() middlewares in Express Pipeline so that the received data from the body will be read 
            - Thne urlEncoded() and json() are the middleware by default available in Express 4.0+, earlier we were using body_parser as a sperate module
    - Router()
        - get(), post(),put(),delete() methods
            - Parameter 1:URL, the request URL
            - Parameter 2: The Request Handler Callback
                - Request, Response        
            - Response Object Methods
                - sendFile(), open files on server, read it and respond to the client
                - status(), HTTP Stautus
                - send(), send t5he response
                - json(), send the JSON response
                - end(), complete the response        


# Node.js Object Relational Mapping (ORM) 
- Use Sequelize
    - An official ORM Module for Node.js apps
    - Supports databases like MsSQL, MySQL, MariaDb, Postgres
    - USes CLI to  generate the JavaScript Models (classed) from Database Tables
- Packages
    - sequelize, the base framework for ORM
        - The 'Sequelize()' class with Constructor having following parameters
            - Database Name, UserNAme, Password, Host Opetions
                - Host Options
                    - host, the name of the server / IP Address
                    - dialect, the data provider e.g. mysql, msmsql,maria, postgres
                    - pool, the connecton pool
                    - define, the tiomestamp for concurrency
        - Methods of Sequelize (all are async methopds)
            - sync({force:[bool]}), connect to database,
                - if force:true, the table will be overwrriten, so set false for preventing data overwrite
            - query()
                - used to execute the rqw query and stored pr0ocedures
            - transaction()
                - managing Multiple table Write Operations transactions        


    - sequqlize-auto
        - The Command-Line-Interface
            - Package for generating JS Models from Tables
        - Provides Model object that is having methods for performing CRUD operations          
            - Model methods
                - findAll(), reads all reows from table 
                - findOne({where:{[Condition]}}), search record based on condition
                - create(object), create a new record
                - update(JSON Object, {where:{[Condition]}}), update the record based on  condition
                - destroy({where:{[Condition]}}), delete the record    
    - npm install -g sequelize sequelize-auto mysql2
    - npm install -save sequelize sequelize-auto mysql2            
                 
    - Command to generate Models from the database
    - sequelize-auto -h [Server-Name OT IP Address] -d [databasename] -u [username] -x [password] -p [database access port] --dialect [Database Provider] -t [Blanklspace separated list of tables]            
        - -p : if the default port is used by database the this is optional. E.g. 1433 for SqlServer, 3306 for MySQL, otherwise, on the machine the database is usiung different port then mention -p with the po9ret number
    - e.g.
        - sequelize-auto -h localhost -d business -u root -x P@ssw0rd_  --dialect mysql -t department employee      

- ResultSet
    - The resultant of Select Query in Database
    - ResultSet contains 'RowSet'
        - RowSet contains records with Metadata
        - There can be multiple ReowSets present into ResultSet
- Transaction Management
    - This is the process of bundling the DML Operations across multiple dependent or independent tables in a single scope
    - If all operations on these tables are successful, then the transactions is Commited else it will be rolled-back
- Sequelize Transactions
    -  Managed Transaction (Recommended)
        - The scope of transaction will be set by the asynchronous transaction method. This will Auto-COmmit or Rollback Transactions 
    - UnManaged Transaction    
        - The Transaction scope object must be explicitely passed to each transaction and then explicitely call Commit or RollBack 

    - sequelize.transaction(async (t)=>{..........TRANSACTION-LOGIC...........}, {transaction:t});
        - transaction, is a scope and the t is the scope monitor object that will contains the current state of execution i.e. either success ot failed
        - if all are success then Auto_COmmit else roll-back

- Sequelize COde-First Approach
    - Use the 'define()' method of the Sequelize to create a model with attributes
    - Define Columns as Attributes
        - DataTypes.[TYPE-NAME]
    - Model class
        - belongsTo(), one to one relationships
        - hasMany(), one to many relationships    

-  Web Server with Sessions
    - Anonymous Sessions
        - No Login is required
        - Server uses its 'METABASE'
            - It is a Session Store where the sessions information is maintained on the server
    - Express + Node.js use-cases for using session        
        - Creating a HTML Client App (React/Angular) and need of storing authenticated user information
            - STart a session when user Login and destroy it when logoff
        - USing Role BAsed Authentication and wants to provide an access of the part of the application to specific roles, then use he session for LogIn to Logout     

    - Express-Session
        - npm install --save express-session
        - Add the session as a MIddeware into express instance 
        - The Express Server will maintain the session state for the Login User in separate thread
# Node.js JWT
- using jsonwebtoken package
    - Package that is used to generate and validate the token
        - sign(userObject, secret, signinoptions): return the JSON Web Token (JWT)
            - userObject: a Claim of the authenticated user. This will be added in the token in the 'payload'
            - secret, the signeture key used by the token to encrypt the token information
                - THis is available in Signeture
            - signinoptions: the JSON object that contains information like 
                - 'expiresIn': The expiry in seconds
                - alorithm: the encryption algorithm
        - verify(token, secert, verificationCallback)
            - token: the received token from the client
            - secret: the signeture key for decrypting information from the token
            - verificationCallback(error,decoder)
                - error: Occured if the token verification is failed
                - decoder: used to decode the token information e.g. Claim from the payload so that response can be generated
    - npm install --save jswonwebtoken
        - express-jwt, package as an alternative, mbased on jsonwebtoken            

                     



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
    

# Date: 13-09-2021
1. CReate REST APIs for Accepting HTTP Methods for Customers from the HTML Pages. Make sure that these HTML Pages will be hosted and responded using Express Server. 
2. CReatte a collection that will store USerNAme and PAsswords. 
3. Create a Login PAge, that will be used to accept Login requests from the client. Createb a REST API that will Authoprize tyhe client and then only the Customers' operations (GET/POST/PUT/DELETE) can be allowed       

# Date: 14-09-2021
1. Create REST APIs for teh Project (Dispaych Management)

# Date: 15-09-2021 
1. Self-Study
    - Learn about the Sequelize Migrations
        - Generate Database Migration Files from Models using sequelize-cli
            - npm install -g sequelize-cli
                - https://sequelize.org/master/manual/migrations.html
2. (Today)
    - Create a Role Table in Database
        - RoleId (Primary Key) and RoleName (UNique)
            - Administrator, Manager, Operator
    - Assign a role to the user, One user will have only one role
    - There must be a table of name UserInRole with columns as 
        - RelatioId (Primary Key), USerId (Foreign Key), RoleId (Foreign Key)
    - Create an API, thhe will create Role, USers and Assign Roles to User
    - Provide an access of Department API to the USers with following rules
        - Administrator Role Can perform CRUD operations for Department
        - Manager Role can perform, CReate, Read, Update but not delete
        - Clear Role can perform only Read operation

# Date 16-09-2021
1. (Today)Integrate the token in the Role-Based-Security Assignment of Date 15-09-2021. The Payload of the token must carry UserId and RoleName to tyhe client. Make sure that, the database table is created to store following information of the User
    - LoginDateTime, Token, API Accessed, LogoutDateTime  
    - If the User is Loggedout, then no further requests are processed for the user even the token in not expired
      