# Practices to be followed for JavaScript Full-Stack Apps
1. Decide the variable Declaration Strategies
    - all variables MUST start in Lower Case or can use the camel casing
    - The Scoping of the variable as well as functions is mandatory
        - Use the 'let' for Block Scope
        - Enclose the variable declaration and function inside the 'Module' (Very-IMP)
        - The Module Provides a great deal of Code Maintanability
        - This results into the 'Modular Pattern'
2. Class and Function Name, the JsLint and JsHint, toolsets are used to code-quality check
    - Mandatory: The Class Name Must be in Pascal Case
        - e.g. React Component
    - For Functions
        - If using Function as a 'class' or 'object containg methods', then its name must be in Pascal Case
        - If the function is inside the ES 6 class, then the name must be in Camel-Case
        - If the function is utility-function is utility (e.g. toUpperCase(), addValue()) then it can  be in 'lowercase' or in 'camesCase'    
    - USe the JavaScript Code Quality Tool
        - npm install -g jshint
        - npm install --save-dev jshint
    - Create a '.jshintrc' file
        - The Resource configuration file
    - Go for the COde Quality check using 'jshint' CLI
        - jshint [File-Name].js            
3. Socpe of Reusability
    - Divide the JS Code as per the behavior into seperate modules
        - Put all Data Access Code in seperate class or module
        - This will provide the 'Cohosive Coding'
            - All the code in Module/Class is written for similar types of operation
    - Improve the code Maintenance    
    - Improves teh Test-Driven-Development (TDD) approach   
        - Jest, mocha, chai, enzyme
4. Generalized approach of Class Definitions aka Abstracts
    - Create classes w.r.t. its expected behavior
        - Enhancements into the ' Socpe of Reusability'
    - An Easy approach of Instance Creation using 
        - Constructor Pattern, Introduced for JavaScript
            - Class with Constructor
            - Function used as Object accepts the parameters
                - function MyObject(x){ this.fn1=function(){.....} }   
                - The MyObject is a close-type function object where MyObject(x) isn constructor 
            - If an instance is to be created again and again then instead of using 'new' nmonikar to define an instance using Object.create();
    - Using the Prototype (Extensions)
        - Use this approach to enhance an exisitng object instead of creating a seperate function            
            - MyFUnction.prototype.[NEW-FUNCTION] = function(){......}
        - In ES 6 Classes, uses 'extends' nfor Inherince    
    - Try to prevent the Multi-Time instantiation of the class
        - Like Singleton Pattern 
    - Protect the properties of the class by using the Proxy Object, so that various clients of the class will use properties from the original class using different ways and oerform Read/Write Operations
        - Implement the Proxy Pattern
    - Challanges of creating an instance of class based on 'Criterias'
        - Client, Method to Create Object based on Criteria, Actual CLass that declares/generates object     
            - Plan for a Factory Mathod that will accept criteria, alalyze it and generate object
            - Facty Method Pattern for Creation of Objects
5. Clear definitions of Layers
    - Define separate layers for each Cohisive funcationality
        - e.g. Dal, Presentation Layer (Components), Services (for all external HTTP Calls), etc.
    -  Challanging Facts of Separating logic across Layers
        - What if an exception if thrown?
            - Use try{...}catch(e){thow e}
        - How to Manage Communication Across objects from various layers?
            - a.js, contains a method fn1(){...}, this MUST be accessible in b.js for an event
                - For JS loaded in Browser, the 'window' and 'document' object already uses , the 'addEventLister()' and 'moveEveListener()',
                    - the window and document object are observers those len to events and execute the function attached to it
                    - window.addEventListener('mousemove', this.getPotision);
            - The Browser already implements the Observer Pattern for the events and hence the window and document objects communicates with other objects those contains function to be subscribe to the event                   
6. Security
    - Always Implement An Industry Standard Security
        - JWT
        - OAuth
7. Front-End Creations
    - React.js Reusable Components
        - TableComponent
            - DataSource, CanDelete, CanSort, SoryKey
                - Array with 3 Properties, 4, properties
                - CanDelete=true or false
8. Server-Side Development
    - Choose suitable PAckage for Implmentation
        - Node.js as Open SOurce, please choose package that has several downloads, less issues and support
9. Testing
    - Test Each Part of App
        - API Testing
            - Load Testing
        - Unit Testing
10. Deployment
    - Integrate the Forn-End App with Server-Side App and deploy it as a single Deployable Package
    - Microservices
    - Serverless

# JavaScript Design Pattern
1. Modular Pattern
    - Specific to JavaSCript
    - Not Officailly in list of Design Pattern
    - This is Implemented in JavaScript using Immediately Invoked Function Expression (IIFE)
    - In ES 6 with Babel, this can be implmented using 'export'
        - e.g. export default
    - In Node.js, this is implemented using 'modules.export'     
    - Most of the ES 6 based JS Libraries and Frameworks are using Modular Pattern out-of-the-box
        - React, Angular, Vue, etc.
        - Node.js using STandard and External Packages
2. Singleton Pattern
    - The class is instantiated only once
    - In JavaScript, this is implemented using IIFE and the 'Object' class
        - Note: see singletonpt.js        
    - Use this for a scenario when an object creation is time-consuming process
        - e.g. Sequelize, HttpService
    - Caution:
        - The Singleton is bottle-neck of the app (why?)
            - If the Instance crash, all objects using this will crash and the app will be unstable or fragile
            - The Singleton is not testable        
3. Using Proxy Pattern, see es6\source\advance\proxy\usingproxy.js
    - The JavaScript's (ES 6) Proxy class is used to provide a controlled access of the class to various consumers using 'handler'
    - Observations on Proxy
        - The Logic of Handler varies for different Consumers 
        - THis will rersult into writing multiple Handlers
        - THis will increase Code Size and may result into code maintenence issues       
4. Factory Method Pattern, see factorypt.js
    - A Creational Pattern
        - Used in the case, where the object is generated based on inputs supplied by the consumer or client.
        - The CLient will not have any direct access to actual objects
        - The Factory method will encapsulate all logic of generating the object
    - Caution using FActory Maethod
        - If the Factory Method is Complex then instance creation will be delayed
        - If the Factiory Method throwsn an exception, then the instance will never generated
        - The creator of Factory Method must be aware of actual class(es) of which instance is generated    
5. Using Observer Pattern, see reactjs/src/reduxapp
    - The Behavioral Pattern
    - Uses to provide a subscription model in which object subscribew to an event and get notified when an event is occured
    - Subject
        - the object that responsible to maintain list of observers
        - E.g. the window is the subject that is monitoring or observering events those are fired
    - Observer        
        - a function that will be excuted against an event that is raised
    - React-Redux
        - useDispatch() or mapDispatchToProps()
            - Subjects those wree looking for the Dispatched actions
                - e.g. ADD_DEPARTMENT
            - Observer
                - The Function that was getting executed when the ADD_DEPARTMENT was dispatched     
            - <Provider store={store}> <React-Components>  </Provider>       
6. The Mediator Pattern
    - The Behavioral Pattern
    - A Central Object aka Mediator is responsible to monitor and manage communication across the Participants
    - A Central Authority that will listen each message/action initiated by Participants
        - Redux apps
            - Reducers
                - A Central Authority that is used to manage the actions from all participants (Components), and based upon these actions the state will be updated and shared across all other participants   
