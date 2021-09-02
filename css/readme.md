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


# Assignment 
# Date 02-09-2021
- Create a table with 4 columns and 10 rows by hard-coding. When the the mouse is entered on the table row, change the backgroiund color of the table row and font size of the table cells     