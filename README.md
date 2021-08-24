# JavaScript Features
1. JS FOundations
    - Variable Declarations
        - Variable Scope
            - The var is 'function-scope' declaratrion
            - Within a function from the declaratrion onwards, the var declared variable will be accessible 
``` javascript
function printValue(x){
    if(x == true) {
        var y =10;
        console.log('In If Condition y = ' + y);
    }
    console.log('Outside of If Condition y = ' + y);

}

printValue(true);
printValue(false);

```             
    - DataTypes
        - Methods for DataTypes
        - Number, consist of integer and Floating Point
        - String
            - This is a character enclosed in '' or ""
        - Date
            - The Standard Predefined Object of JavaScript to show dateand time based on culture of the browser
        - Boolean
        - Object
            - Array
            - Date
            - Object Literal aka JSON Object 
``` javascript
// declare a variable. The 'var' is a keyword used to declare a variable
// default datatype of the variable, if not assigned with default value, will be 'any'
// typeof() is an Operator
var x;
x = 10;  // number
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = 'Mahesh';  // string
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = "Sabnis"; // string
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = 700.56; // number
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = true; // boolean
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);

// Complex Objects in Variable

// 1. The Object Literal aka JSON object. The data will be stored in Key/Value
x = {}; // Empty Literal
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// add literal properties in EMpty Object
x.FirstName = "James";
x.LastName = "Bond";
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x.FirstName + ' ' + x.LastName);

// 2. The Object with Predefined Schema in Object Literal
x = {id:101,name:'A'};
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x.id + ' ' + x.name);
// 3. Define Date
x = new Date();
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// Pass explicit values to date object
// Parameters to the Date Object
// P1: Year 
// P2: Month, starts from 0 (January)
// P3: Date
x = new Date(2021, 7, 17);
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// 3 Array Object
x = []; // Empty Array
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
x = [1,2,3,4,5,6,7]; // default DataList
    - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
- Description List
    - List with Items havinf Sub-Items    
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);
// a Complex Array consit of hetrogeneous data entries
x = [10,20,10.3,45.7, 'A', 'B', 'C', {id:9,name:'SSD'}, [4,5,67]];
console.log('Type of x = ' + typeof(x) + ' Value of x =' + x);



```
    - Using Operators
        - +,-,*,/
        - +=,-=,*=,/=
        - >,<, >=, <=
        - Equality Operators
            - ==, 
            - ===, 
            - !== 
    - Writing Simple Functions    
        - The 'function' is a reserve word
        - May have Input Parameters and output parameter
            - for the return type of the output paranmeter use the 'return' keyword
``` javascript
// 1. function w/o input and output parameters
function doWork(){
    console.log('No Parameters');
} 

// 2. Function with Input Parameter but not output parameter
function process(x){
    if(typeof(x) == 'number'){
        console.log(x*x);
    }
    if(typeof(x) == "string"){
        console.log(x);
    }
}

// 3. Function with Input Parameter and output parameter
function processData(x,y){
    if(typeof(x) == 'number' && typeof(y) == 'number'){
        return (x+x) + (2*x*y) + (y*y);
    }
    if(typeof(x) == 'string' && typeof(y) == 'string'){
        return x+y;  // default + operator is concatination
    }
}
```


- JavaScript W.r.t. Browser
    - Native Language of the Browser
        - JavaScript Object Model to Access
            - Browser's Runtime and Parsing Service to execute JS Code
                - Pase each Statement of JS Code and if its is valid execute it and Proced to next statement 
      
        - The 'Object' in JS that represents the Schema (aka properties) and value of the Schema
            - It represents a data member of the JS Code that stores data
            - It is Complex object that contains methods
                - Number
                - String
                - Array
                    - The Only Official Collection in JavaSCript 
                - Date
                - Literal aka {}    
        - In JS everything is an Object        
        - Manage HTML DOM Property System and Event System
            - The 'window' Object
                - Represents the Current Browser Instance
                - Provides Events for Browser WIndow
                    - onload
                    - oncolose
                - Manages the HTML Document Object Model (DOM)
            - The 'document' Object
                - Represents DOM
                - Used to Interact with HTML ELements in DOM Tree
                    - USed to Extract HTML Elements
                        - Methods to Extract Elements
                            - document.getElementById('[id-attribute-of-HTML-Element]');
                            - document.getElementsByTagName('[TAG-NAME]');
                                - return collection of HTML elements
                                - The collection of elements may not provide or have apropriater behavior
                                - If you want to attach a common event to all Tags then this is best approach
                            - If you want to query specific elements in DOM Tree having different tags then use the 
                            - document.getElementsByName('[NAME-ATTRIBUTE-OF-HTML-ELEMENT]');    
                                - The 'name' attribute is more usedful when a group of DOM elements is to be created    
                            - document.getElementsByClassName('[VALUE-OF-CLASS-ATTRIBUTE-OF-DOM-ELEMENT]');
                                - A collection of HTML elements based on the class
                                - a DOM ELements group based on CSS    
                        - document.querySelector('[SELECTOR]');
                            - Extract and retrurn the First Match DOM Element and stop        
                        - Read/Write DataList
                            - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
                        - Description List
                            - List with Items havinf Sub-Items     from and to HTML Elements
                            - property to read and write value of Input element
                                - 'value' property
                            - innerText: To display Text in HTML Element
                            - innerHTML: To display Child HTML in Parent HTML Element        
                        - Attach Events to HTML Elements  
                            - The 'addEventListener()' method of the document object, used to attach an event to the DOM Element
                                document.addEventListener('[NAME-OF-THE-EVENT]', [FUNCTION-EXEDCUTED-FOR-EVENT], [Boolean-To-Keep-EVENT-REGISTERED-WITH-DOM])
                                    - click, mouseenter, mouseleave, blur, change, keyup are events
                                    - Boolean-To-Keep-EVENT-REGISTERED-WITH-DOM: true, the event will be kept attached with DOM and if 'false' the event will be released
                - Complex UI Requirements for DOM Elements for Modern Applications
                    - DataList
                        - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
                    - Description List
                        - List with Items havinf Sub-Items     Shown in Collection Elements
                        - Select Element [select options]
                        - Radio Button and RadioButtonList
                        - CheckBox and CheckBoxList   
                        - Tabular DataList
                            - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
                        - Description List
                            - List with Items havinf Sub-Items     Display        
        - USing JavaScript FUncations as Objects
            - Used for creating Highly-Cohisive Objects containing funcationalities or Logic
            - These will act as a class   
            - The FUnction Object has an access to the Object Methods
            - Three Types of Function Objects
                - Reference Functions
                    - The Function Definition is stored in var declared object
                    - Like class, that contains 'publically-exposed-methods' and 'publically-exposed-data-members' using 'this.' prefix
                    - syntax
                        - var MyObj = function([Parameters]){this.fn1=function(){...},.....}                
                            - the 'fn1' is public function 
                        - Create Instance, 
                            - var instance = new MyObj();
                    - USe the ref function for re-distrubution of logic as library across projects       
                    - The 'prototype' property of Object 
                        - USed to extend the Reference function and allow to add new method in it
                - Close-Type functions
                    - They are function Objects, those returns a JSON object witbh method and data properties
                    - Syntax
                        - function MyObject([parameters]){  ..... return { K:V, K1:V1, ..... };   }                    
                            - K is the name of function or DataList
                                - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
                            - Description List
                                - List with Items havinf Sub-Items     Member
                            - V is the implementation if K is function or value is K is data member
                    - USe the function object when the final or not-extendable logic must be added in application       
                - Immediately Invokable Function Expressions aka IIFE
                    - This is a JavaScript that will be executed as High-Priority JS before the DOM is loaded in browser
                        - THis is used to execute Initialization Logic that foes not need DOM
                            - e.g. Call AJAX and receive the data
                        - NOte: Please do not refer DOM Elements in the IIFE, becauseDOM is yes to be loaded while loading and Executing IIFE
                        - Syntax
                            (function(){......})();       
                    - jQuery, Knockout, React Libraries uses IIFE to initialize Object Model which is used by DOM      
                    - IIFE allows to create a Module min JavaScript and also defines scope for the variable declaraed in it      
# HTML 5
- New Markup for moden Web UI Front-End.
- Standard HTML Markups with inline JavaScript and CSS
- Fatures
    - New Input Elemnets
        - Date, Month, Week, Time, Email, Number, Range
        - Validators
            - required, minlength, maxlength, pattern, email
        - Property System
            - min, max, placeholder, validation attributes    
    - Form Element
        - DataList
            - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
            - The DataLIOst can be linked with HTML input element using the 'list' attribute of the HTML Element
        - Description List
            - List with Items having Sub-Items  
    - Drag-Drop APIs
        - The DOM Events those allows to dynamically MOdify the DOM Tree by changing position of elements
            - Property
                - draggable, when it is set to true, the HTML element can be dragged
            - Events
                - dragstart, drag the element
                    - Combination of MouseEnter and MouseLeftButton down event 
                - dragover, take the element to target
                - drop, drop the dragged element    
            - The DataTransfer Object returned from the drag and drop
                - This object is used to store the elements's metadata e.g. id, name, tag ect. to move it and drop it
                    - evt.dataTransfer.setData();, set the metadata of element being dragged
                    - evt.dataTRansfer.getData();, get the meatdata of element being dropped     
    - Storage
        - localStorage
            - Like Session STorage, its is alos accessible to JavaScript loadced by the page from the origin. The data will be persist and accessible even the browser is closed in reloaded for the same origin
                - window.localStorage
                    - setItem('Key','Value') 
                        - Save data in localStorage with K/V
                    - getItem('Key')
                        - Retrieve data based on Key
                    - removeItem('Key')
                        - Removce data based on key
                    - clear() 
                        - clear the localStorage
        - sessionStorage
            - Highly volatile browser storage. THis is used to store data in JSON format in Key/Value pair
                - Once the browser is closed, the data will be vanished
            - The Session Storage Object is accessby by the script loaded in browser from the origin of the web site
                - Same methods like localStorage
        - indexedDbB
            - The Browser's Database
                - window.indexedDb
                    - The Object that access indexedDB
                - window.indexedDB.open('[Database-Name]',[Version]);
                    - if the database is not available then it will be created and opened for transactions
                    - If it is already avaialble then it will be opened for transactions
                - Events for indexedDB
                    - onupgradedneeded: event callback to perform transactions on database to create table
                    - onseccuess: event callback that represents the database is created successfully
                    - onerroor: event callback representing that database failed       
            - Stores data in Table Format
                - Table is called as ObjectStore
                - Created using 
                    - dbRef.createObjectStore('[Name]', {keyPath}) method
                        - dbRef is reference of indexedDB currently open for transactions
                        - keyPath: the Primary Key for the ObjectStore
                        - createObjectStore() method returns reference of objectStore object whihc is used to define columns in it
                            - createIndex('[Actual-Column-Name]', '[Develper-Friendly-COlumn-Name], Constraints') method, to create column 
            - Supports Transactions for performing Read/Write Operations
                - IDBTransaction object
                    - read, readwrite, write transaction types
                    - add(), create a new record
                    - put(), update record
                    - delete(), to remove record
                    - openCursor(), to read all records
                    - getAll(), to read all records
                - all transactions are async     
                    - add().onsuccess().onerror()
        - WebSql
    - HTML 5 Features Generally used by Mobile Apps
        - Geolocation
            - Access GPRS of the Device or Network Connectivity for the browser
        - File Access
            - Local Files
                - Images, TEsxtFile, etc
        - Camera Access
        - USB Access
        - Printer Access
        - Graphics
            - Canvas
            - Scalable Vector Grphics (SVG)
    - CSS 3 Features


# Asignments
# Date: 18-08-2021
1. Create a Calculator like WIndows Calculator in Browser   
2. In the div tag display following string 

"Indiana Jones is an American media franchise based on the adventures of Dr. Henry Walton "Indiana" Jones, Jr., a fictional professor of archaeology, that began in 1981 with the film Raiders of the Lost Ark. In 1984, a prequel, The Temple of Doom, was released, and in 1989, a sequel, The Last Crusade. A fourth film followed in 2008, titled The Kingdom of the Crystal Skull. A fifth film is in production and is provisionally scheduled to be released in 2022. The series was created by George Lucas and stars Harrison Ford as Indiana Jones.

In 1992, the franchise expanded to a television series with The Young Indiana Jones Chronicles, portraying the character in his childhood and youth, and including adventures with his father. Marvel Comics began publishing The Further Adventures of Indiana Jones in 1983, and Dark Horse Comics gained the comic book rights to the character in 1991. Novelizations of the films have been published, as well as many novels with original adventures, including a series of German novels by Wolfgang Hohlbein, twelve novels set before the films published by Bantam Books, and a series set during the character's childhood inspired by the television show. Numerous Indiana Jones video games have been released since 1982. "

- write functions for performing fopllowing operations on the above string
    - Find out number of Words
    - Find out number of characters
    - Find out number of statements
    - Find out number of Blank Spaces
    - Find out number of vowels in string
    - Find out number of digits
- Call above functions in button click event and show its output in other div tag     


# Date 19-08-2021
1. Create an Array of Products as
{ProductId:0,ProductName:'',CatergoryName:'',Manufacturer:'', Description:'',Price:0}
The Array must caontain at least 20 records. Perform following operations 
    - Generate a Product Table Dynamically (Today)
    - Generate  DropDown Lists for Showing CategoryNames and Manufacturers. Display these lists above the table (Today)
    - When a user select Category Name or Manufacturer name from list, the table should show products based on match
    - Above he table also show a TextBox with a label as enter ProductName or Description to search, when a user starts entering the ProductName or Description then start filtering the table to show matching data
        - Note: There could be a single product by multiple Manufacturers
2. show a CheckBox List (input type="check") to show list of Product Name. End-USe can select multiple Product NAme and at the botton of the List display total price of the checked products (Today)       

# Date 23-08-2021
1. Create a JavaScript Module that will perform the UI Generation operations
    - There will be 2 methods in it as follows
        - 1: DropDownGenerator(DataSource)
                - This method will accept 'DataSource' as input parameter. This is an array. The method will generate DropDownList based on data in DataSource. If the DataSource i8s empty, then an empty DropeDown will be generated. The FIrst option in DropwDown will be having Text as 'Select Value'
                - THis DropDown will Have the 'change' event to return selected Item DataList
                    - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
                - Description List
                    - List with Items havinf Sub-Items    
        - 2: TableGenerator(DataSource,CanSelect, CanDelete)
            - This method will generate HTML Table based on DataSource. If DataSource is empty, then empty Table with message as 'No DataList
                - Provide the Value Filter for INput Text Elements e.g. Auto-Complete
            - Description List
                - List with Items havinf Sub-Items     To Dipslay' must be shown
            -  If CanSelect and CanDelete is true, then each row of the table will have Select and Delete button. Once the select button is clicked, the the selected Record will be displayed. When the Delete button is clicked, the record will be deleted. 
2. Create a Product Array as follows
    {ProductName:'', Price:0} 
    - Generate a HTML List showing the Product Details (Name and price) in dibv tag. Drag the Product Name and drop it in other div tag. While dropping the product in other div tag a JS Prompt Box must be dipslayed wherr you enter nume of quantity. Based on the quantiuty and the price, the dropped product price is calculated. Likewise, drag-drop multiple products and at the bottom of second div, display total price. ENd-Use may delete the dropped product (generate a X or delete button after an element is dropped in other div) by clicking on X or delete button and total price will be reduced. One product can be dragged and dropped multiple times.         
HINT: https://www.dotnetcurry.com/aspnet-mvc/1039/drag-drop-html5-aspnet-mvc-jquery

# Date: 24-08-2019 
1. CReate an Object to Store Products Data in IndexedDB as PeroductId, ProductName, CategoryName, Manufacturere, Description, Price, etc.
    - Accept values from End-User for the Product Info
    - Create DropDown for Manufactureres and Categories by creating reusable function (Note: Use FUnction Object, that will contain method to generate HTML select element based on array of Categories and Manufacturers passed to it) [STRICTLY-NO-HARD-CODING]
    - ProductId Must not be repeated
    - ProductName must start from Character
    - Price Must be +ve integer
    - The record from IndexedDB can be Updated or Deleted
    - Provide Product Search Functionality based on Manufacturere NAme, Category Name, ProductName 