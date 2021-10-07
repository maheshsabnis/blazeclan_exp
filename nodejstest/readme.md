# Testing Node.js Express API
- Consider Approaches for REST API Test
    - Use an Engine that will make request to REST APIs and Varifies response
        - Preferences for Engine
            - Create a Test App that will make Call to REST API
                - The Test App must have an auto capability of accessing REST APIs
                - THis must be UI less or instead executed from the Command Line
                    - Chai
                        - An Assertion Library used for making sure that the Test Case is processed and successful
                            - expect() / to(()/equal()/ notequal()/assert(), etc.
                        - Use chai to implement the test case with assertion.
                    - Mocha
                        - We  run the Test Case (suite) from the Command Line
                        - Runs all Tests in Parallel same as Jest
                        - A Framework
                            - Based on Node.js
                            - Mocha is loaded in Node.js process
                            - Look for the 'test' folder
                            - Read the xxxx.test.js 
                            - Load the xxxx.test.js in Mocha Process   
                            - Execute the Test Case
                    - The Test MUST call REST APIs using the URL
                        - Use the Node.js Module to access REST APIs
                        - The 'Request' Node.js Module
                            - Promise based module for REST API calls
                    - The Code COverage Module fo0r REST APIs calls
                        - The 'nyc' module
                            - provides the Coverage for methods used in communication
                                - Note: Logically no so full-proof
                - Configuration of Test Environment
                    - npm install -g mocha nyc
                    - npm install --save-dev mocha chai request nyc   
                    - installing express
                        - npm install express
            - Create a Client App that will use 'SOME Classes' to access REST APIs
                - THe Browser is required to Run the Client App and then APIs will be tested
                - The Explicit Access is required to Browser, then Run Client App Explicitely to load UI and then call REST APIs (NOT Flesxible and Not Recommended) 
    - Suggestions for writing Test for REST APIs
        - Make sure that the API is running
        - Please write expectation for folowing
            - Status code in response
            - The Body Received in response
                - Assert the entire data received from REST APIs wtih Actual Data        
                - Assert a Schame of data received from REST APIs with Schema of actual Data
            - These must be a test case available for the Predicatble Errors returned from REST APIs
                    - 500
                    - 401
                    - 400
                    - ...and so on
            - For POST, PUT Test consider following
                - Validation Errors from the REST APIs for the data posted to APIs
                - Exception returned by the REST APIs
            - For PUT and DELETE
                - Write a Test for the Header Parameters or URL Parameters      
        - Make sure that each async HTTP request in the test case use 'done()' object 
            - done() object will inform the 'mocha' that the call is completed       


# Assigments

# Date : 07-10-2021
1. Write the Test for following Use Cases for Accessing REST API
    - While making the POST Request to Register NEw User perform following checks
        - UserName is Must
        - UserName must not ne already registered
        - PAssword is MUST
        - PAssword Must be min 8 characters and max 16 characters
    - While Authenticating User Perform following checks
        - UserName must be exist
        - USerName and PAssword must match for Authentication
NOTE: Please write sepoerate Test Cases             