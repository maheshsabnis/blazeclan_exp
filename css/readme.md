# Using CSS
- the inline HTML file CSS Definition
    - <style>
         [SELECTOR]{ [STYLE-PROPERTY-NAME]:[VALUE] }
    - </style>
- Selectors
    - the 'id' selector
        - USed to extract element based on 'id' attribute of HTML element
            - <input type="text" id="t1">
        - #t1{[STYLE-DEFINITION]}     
    - the class selector
        - USed to extract element based on class attribute
        - Style will be applied to all elements having same class applied 
            - <input type="text" class="c1">
        - .c1{[STYLE-DEFINITION]} 
    - tage selector
        - Uses the HTML element's tage name
        - style will be applied to all mtaching tags     
            - <input type="text">
            - input{[STYLE-DEFINITION]}
CSS 3 Selectors
    - Applying style by combining tag-with-type or tage-with-class-value or tage-with-type-with-class-value
    - Applying style based on postion of element
    - Applying style based on index of element 
        - Style is applied on index of element w.r.t. its container
            - nth-child([CHILD-Index]), the index of child w.r.t its perent
            - nth-last-child([Index]), index from last

    - Applying style based on attribute value of the element    
    - event based styles those are applied on events on DOM element
        - apply and remove styles based on CSS 3 events

# Style Definitions
    - Background
    - Border
    - Font
    - Dimensions: Height, width
    - Postions: Marging, Padding
    - Appearance: Overflow, Float

# using Bootstrap in the application
- Install Boostrap
    - create package.json
        - npm init -y 
    - install bootstrap
        - npm install --save bootstrap
    - Folders in bootstrap Framework
        - scss
            - SASS files with the source code of styles
        - js
            - The JavaScript code that contains following folders
                - src
                    - JavaScript source code that is used to define standard plugins
                - dist
                    - Distribution folder used for copying the files on Producstion server so that the plugIns can be used on Page in Production       
        dist
            - The actual production folder that contains minified JS files and CSSm those are used in production             
- Using Bootstrap in application
    - Use CSS and JS-Plugins in the application
        - add the boostrap CSS reference on HTML Page
            - Either, add the reference from the physical file availabe on the server
                -  <link rel="stylesheet" href="./../node_modules/bootstrap/dist/css/bootstrap.min.css">
            - Or, use Content Derivery Network (CDN)
                - The CSS files (all other files required to be loaded in browser) are kept on seperate server and they are downloaded from that server. It is not requird to have those files on our production server     
    - Standard Styles
        - Layout
            - Container
                - 'container' class applied on div
                    - container-fluid
            - Table
                - MOst COmmon Layouting used for Responsive design
                    - table, table-bordered, table-striped, table-dark, table-danger, etc.
            - Grid
        - Look and feel
            - bg-[color], padding p, marging m
            - using Pagination
                - Create a list element taht is showing the pagination features
                - applied on ui, li and a tag
                - .pagination
                    - .page-item
                    - .page-link
                - . pagination-sm, small size
                -  pagination-lg, large size
            - using breadcrumb
                - path seperator (/) for the navigation links           
        - Forms
            - Styles for Create a Group of FOrm Elements with its label
                - form-group
                    - applied on div tag and create a group of HTML elements e.g. label and input element
                - form-control
                    - applied on input:text and select element
                - form-check-input
                    - radio button and checkbox
                - form-check-label
                    - label for radio button and checkbox
                - classes for buttons
                    - btn, btn-warning, btn-success, btn-danger, btn-primary, btn-warning, btn-default
                - class for file element
                    - input:file
                        - form-control-file
                - range (Not effective in Edge and Chrome, becuse the range is having its own style)                     



# Assignment 
# Date 02-09-2021
- Create a table with 4 columns and 10 rows by hard-coding. When the the mouse is entered on the table row, change the backgroiund color of the table row and font size of the table cells     

# Date 03-09-2021
- Create a Hard-Coded table for Employees and show atleast 40 rows.
    - TAsk 1: Show Different Color for Row for Different Deprtmant. Do this using Bootstrap styles and JavaScript Code
    - Task 2: When the mouse is entered in each row, change its row-color as per your choice  
    - Dynamically generate table
    - Task 3: CReate  Pagination links below the table, make sure that each page should show only 8 records per page. When the page is loaded the table will display first 8 records and then when a page number is selected from the pagination, the table will show next 8 records
        - slice () array for reading 8 recods for each page number selected 
