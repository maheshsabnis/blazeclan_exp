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
x = [1,2,3,4,5,6,7]; // default Data
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
                        - Read/Write Data from and to HTML Elements
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
                    - Data Shown in Collection Elements
                        - Select Element [<select><options>]
                        - Radio Button and RadioButtonList
                        - CheckBox and CheckBoxList   
                        - Tabular Data Display                  
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
- Call above functions in button click event and show its output in other dive tag     

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

