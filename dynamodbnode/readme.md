# Using or Accessing DynamoDB using Node.js apps
-   The 'awd-sdk'
        - The JavaScript SDK released by Amazon for Browsers apps, Native apps and Node.js apps    
        - Global Install and local install
            - npm install -g aws-sdk
            - npm install --save aws-sdk
    - APIs offered
        - DynamoDB()
            - API to Access the DynamoDB
                - The DocumentClient class
                    - Used to create a new Item in the table
        - Serverless

- The Application MUST authenticate against the AWS Resources using AccessKeyId, SecretAcceessKey
    - AWS.config.update({
        accessKeyId:'',
        secretAccessKey:'',
        region:'',
        endpoint:''
    })             
    - accessKeyId: The User's Permission Sets
    - secretAccessKey: Authorization
    - region: The name of the region to connect
    - endpoint:The URL to access the resource from AWS
        - e.g.
            - https://[service-code].[region].amazonaws.com
            - https://dynamodb.us-east-2.amazonaws.com         

# Refer
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html

# Assignment (Show me on Monday, bust start now)
# Date: 14-10-2021
- Create an Express REST API, thetn will perform Following
    - Create a Dispatch Table with the following Attributes
        - Vendor: Partition Key, String
        - DispatchId: Sort Key, Number
        - CustomerName: String
        - PickupLocation: String,
        - DropLocation: String,
        - PickUpDate: String,
        - DropDate: String,
        - Items: [] List
    - The API MUST have get()/post()/put()/delete9() method read/write/modify/delete data in DynamoDB Table.
    - There MUST be get() method for Following
        - List of Dispactches by vendors
        - LIst os Dispatches by customer
- COmplete this because we will be using the same example for serverless and for microservices             


