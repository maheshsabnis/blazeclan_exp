# ES 6 Features
    - Modern JavaScript
    - Used for Full-Stack JavaScript App
- Scope variable declaration
- Template Strings
- Arrow Operators
- Modern methods for Array, String and Date Objects 
- Collections
- Spread Operators aka building Immutable Object
- Object Oriented Programming
- Promises, ES 7+
- Asynchronous Programming, ES8+
- Modules
- Generators, ES7+
- Iterators, ES7+

# Languages Implementing ES 6 Features aka ESx features, where x is 6,7,8,9,10, next 
- ES 6 aka  Modern JavaScript aka High-Level JavaScript
    - Developed by Mozilla, used by React.js, Vue, Ember, Node.js by default
- TypeScript (MOST-POPULAR-IN-JS-FULLSTACK)
    - Developed, Maintained by Microsoft    
    - Used by Google for Angular Development
    - USed by React, Node.js for Application Development
    - TypeScript = JavaScript + DataTypes 
- Dart
    - Language by Google, used by google for their Web PLugIN Products    




# Programming with ES 6
    - Project or Environment Configuration 
        - Node.js, https://www.nodejs.org
            - Provides 'npm' utility (Node Package Manager)
        - Install Packages for ES 6 Programming
            - Have the package.json file
                - THis file is used to define Package COnfigurations and dependencies for the current application
                - COmmand to Create package.json
                    - npm init -y
                - Important sections of package.json
                    - "dependencies":{}
                        - COntains List of Package to Execute the Application
                    - "devDependencies":{}
                        - Contains List of Packages to Develop and Test the Application
                    - "scripts":{}
                        - Contains COmmand to perform Following operations in APplication
                            - start: to run the package
                            - build: to build the package
                            - test: to test the package            
            - Install Babel Packges in Global Scope
                - npm install -g [PACKAGE-NAME]
                    - npm install -g @babel/core @babel/cli
                        - @babel/core: Packge containing Babel Transpiler Object Model
                        - @babel/cli: Package containing Command-Line Tools for Transpilation 
                    - Installing babel in global scope will provide an access to 'babel' tool
                        - babel [Source-JS-File] -o [Target-File].js    
            - Install Packages for the applicaiton to use Babel for Coding and Compilation
                - npm install --save [PACKAGE-NAME]        
                    - Add PAckage in 'dependencies' section
                    - e.g.
                        - install --save @babel/core @babel/cli @babel/preset-env
                - npm install --save-dev [PACKAGE-NAME]
                    - Add PAckage in 'devDependencies' section

    - Using Right Features for Programming
        - Basic Features
            - Scopes using the 'let' keyword
            - Template String aka String Interpolation
                - syntax
                    - `${[Expression]}`
                        - Where Expression is String
            - Iterations
                - for..of
            - Array Methods
                - for array methods use 'Arrow Operator'
                    - It's a Simplified matchanism to pass the excutable expression to the method 
                    - SYntax
                        - Array.method(([Paramatesr...])=>{[IMplementation]})
                - Iteration Methods
                 - forEach()
                    - does not return anything
                 - map()
                    - can return the output array by modifying contents of source array into new array
                 - filter()
                    - USed to filter data from source array into the Target Array based on condition
                - Search Method
                    - find(), [Only in ES 6, High-Level-JavaScript]
                        - Search first occurance of record based on condition
                - Array Manipulation Method
                    - reduce()     
                        - The method that accepts a callback function and process each record from the array and return the desired result as per the logic defined in the calback function
                            - Read Each Record and Process it and advance the index counter of array to the next record, hence 'reduce' the array
                        - USes Case
                            - Sum of all records in array
                            - Frequency of record match in array
                            - Group the array based on group key e.g. Group of Products based on Category
                        - Array.reduce(callabck, initialValue)
                            - callback(p1,p2,p3,p4)
                                - a function that contains the processing logic 
                                    - p1: previousValue, the result of processing of previous record in array
                                    - p2: currentValue, the current record in precessing in array
                                    - p3:(optional), current index of record in array
                                    - p4: (optional), the traversing array aka rray being processed
                            - initialValue: (optional)
                                - default to the previousValue, generally always kept as empty object
                                    - ['Mahesh','Ramesh','Sabnis','Ramesh','Sabnis','Mahesh']
                                        - All are occuring twice
                                    - initialValue of Frequency = 2
                            - Returns an Result as object
                                - {}, object that contains final Result after executing Reduce logic        

            - Collections
            - String Methods
                - Array type only for textual data
                - search() the string based on value or regular expression
                - match()
                    - serach the string for matching expression, case sensitive or insesitive
                - check for availability of specific word in string
                    - includes()
                - search(), match(), includes(), metrhods uses ES 5 'Symbol' object
                    - THis object creates a Pattern based on value passed to it and extract data based on mqatch pattern      
                - check the string / word startwith or ends with   
                    - startsWith()
                    - endsWith()   
            - Date Methods    
                - Date() object,
                    - returns the current Date
                - get Methods
                    - getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds()
                - set Methods      
                    - setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds()          
        - Object Oriented Programming
        - Advanced Features
    - Delivering the Output JavaScript to the Browser
        - Transpilation of ES 6 Code to ES 3/ ES 5 Code from COmmand Line
        - Syntax
            - babel [Source-JS-File-Path] -o [Target-File-Path].js
        - add tyhe .babelrc file (Babel Resource Configuration) for defining the transpilation environment for the current application    
        - Run the Output file in Node.js server
                - node [File-Name].js
        - Refer the file using scrip0t reference in browser        
    - SPread Operator, used to create an Object immutation
        - syntax ...obj
        - USed to maintain the STate of the object for storing additional data in case passing variable number of parameters to the methods aka 'rest parameters'
    - Array issues that why ES 6 Collections
         - Array cannot store data in Key/Value pair
         - ARray cannot store data with unique values    
# Object Oriented Programming w.r.t. ES 6
    - The 'class' is the keyword
    - The 'constructor()' is a standard function
    - public data members are defined inside 'ctor' using 'this.' prefix  
    - no access spcifiers for methods, they are public by default 
    - WHat about private?
        - @babel/plugin-proposal-private-methods
            - USed for declaring private data members and member functions
                - e.g #val, #myfunction(){...} 
    - What about properties?
        - get and set
            - @babel/plugin-proposal-class-properties
    - installing plugins
        - npm install --save  @babel/plugin-proposal-class-properties  @babel/plugin-proposal-private-methods        
    - Abstract class
        - Cannot be instantiated
            - Enhancements in 'new' operator by adding 'Target' property in it to check if the class is instantiated
                - Prevent an instance creation by checking if 'new.Target' is the class name itself, if yes then throw error   
    - What about Static?
        - The 'static' keyword define a method as a static 
    - No Method Overloading by default
    - No Method Overriding      
    - Inheritence is possible using 'extends' keyword
    - The base class constructir is called using derived class constructor using 'supor()' nclass

- USing ES 6 Asynchronous Programming
    - USing AJAX with XmlHttpRequest Object
        - Object to make HTTP Calls to External Services (Web Services/REST APIs)
            - open("[Method]", "[URL]", [Bool], "[USerName]", "[Password]"), 
                - Method: HTTP Method, GET/POST/PUT/DELETE
                - Url: Url address of External Service
                - Bool: default is 'false', means perform async operations, if set to true, then the call will be synchronous
            - send(body?)
                - Send request to the Service
                - body: The data to be send to services for CReate New (POST) or Update existing Record (PUT)
            - setRequestHeaders("[MIME-TYPE]", "[VALUE-OF-MIME-TYPE]") 
                - This must be used only in case of POST and PUT Request
                - Can also be be used if the AUTHORIZATION header is send e.g. bearerToken
                - MIME-TYPE, is the content-type for message passed in HTTP Request in body
                    - Content-Type
                - Value: The Actual Format of the message
                    - application/json, application/xml, text/html, img/bmp    
            - before initializing teh request subscribe to expected responses
                - onload, the callback event method that will be executed for successful response           
                - onerror, the callback event method that will be executed if any error occuer during HTTP request 
    - Using Promise Object [ES 7 Object]
        - Manage the Asynchronous operations is JavaScript Applications without blocking the browser or the JS execution in browser
            - Promise([Success-CallBack],[Error-CallBack])
                - Success-CallBack
                    - Executed when the Call is Successfull
                        - resolve or onSuccess
                - Error-CallBack
                    - Executed when the call is failed
                        - rejectes or onError
            - Promise subsuciption by the client
                - Promise.then(CallBack).catch(CallBack) 
                    - .then(), means success / resolve
                    - .catch(), means error / reject
            - Promise.all() method with 10 overloads
                - 1 promise to max 10 promise objects can be passed to Promise.all() method as array
                    - Promise.all(p),Promise.all([p1,p2]),Promise.all([p1,p2,p3]),Promise.all([p1,p2,p3,,,,,,p10]) when all promisese are successful, the calls on the client will be resolved else rejected
        - When a method calls / Invokes the method which is returning the Promise object, then the caller method must also return a Promise object
            - e.g. If Fn1() call Fn2() and if Fn2() returns the promse object, the Fn1() must also return a promise object
                - if Fn2() return promise object then decorate a statement that calls Fn2() as 'await' and decorate methopd Fn1() as 'async'            
        - async function Fn1()
          {
                let result = await Fn2();
          }

        - In ES 8, the 'async' indicates thet the method Fn1() have atleast one call to an external method that is returning Promise object and because of the the Fn1() has to make sure that, it waits for Fn2()  to complete its execution, thats why Fn2() is decorated as 'await'   

- Iterations
    - Generator
        - function* myGenerator(start,end,step){
            create an iterator that has
                yield return;

            return the record in the sequence    
        }

        - start: The first record
        - end: The Last record
        - step: increament value to move from start to end

# ES 6 Assignments

# Date: 26-08-2021
1. CReate a HTML Page that will show following UI Elements (Today)
    - Date and Time Picker for 'From Date'
    - Date and Time Picker for 'To Date'
    - Button
2. When end-use select Date and Time for From Date and To Date and once tyhe button is clicked, calculate the Difference of Dates  (Today)
    - Years:Months:Days:Hours:Minutes:Seconds     
3. Use the following validations (Today)
    - From Date must be Less than To Date
4. Create an Array of Products, and Perform following oeprations on it
    - Show all Products Group by Categories and Manufacturers (Separate Groups)
    - Search all products by descriptions values
        - e.g. if Laptop and Mobile both have 8 GB RAM, if Serach string is 8GB Ram then show all LAptops and MObiles with 8 GTB RAM      
# Date 27:08-2021
1. Store the data in Map for Departments and Employees and provide following output (May be oin Server using Node or on CLient using HTML UI)
    - List Employees Group by DepartmentName
    - Make sure that the Salary of EMployees for Specific Department enterd from UI (or hard code) will be increased by 20% 
    - Show all Employees Sorted by EmpName

# Date 28-08-2021
1. Modify the userInfo object using Proxy with following Rules (Immediate)
    - Consumer1(): must pass FIrstName, LastName, Occupation in UpperCase Characters. User Secret is still no accessible
    - Consumer2(): Can access the USerSecret bu mkust no modify it
    - Consumer3(): Can Modify the UserSecret but not Email and Occupation
2. Create a Functional UI for Dipstach Order Logic using classes in Application Folder (UI is immediate and completed implementation tomorrow)
    - Create COnstant arrays for
        - TruckNo, Orders, Drivers, Destinations, DelivaryName
    - Once the Trip is completed, display result in table for the Dispatch as follows
        - DispatchId, TruckNo,DriverNamne, DestinationName, DelivaryName, STartDate and Time, EndDate and Time, ExtectedDateandTime, TolaTimeForDispatchTrip, If the time is less that expectedDate and time, the row must be in green color or show it in red color     

# Date: 01-09-2021
1. Create a Class of name 'HttpCaller' that will perform AJAX Calls to 
      "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
    for performing GET/POST/PUT/DELETE Operations
    - Create class of name 'Caller' that will call the HttpCaller class methods for CRUD operatiosn 
    - Createb HTML page taht contains UI for Showin all Products in Table and input elements for Accepting ProdiuctInfo from the USer and Buttons for Save, Update., Delete and Get All         
    