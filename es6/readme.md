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
                        - Array.reduce(callabck, initialValue);
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
