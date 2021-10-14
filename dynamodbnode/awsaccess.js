// 1. Load the aws-sdk

const aws = require('aws-sdk');
// configure the SDK with accessid, secretaccesskey, region, endpoint
aws.config.update({
    accessKeyId:'',
    secretAccessKey:'',
    region:'us-east-2',
    endpoint:'https://dynamodb.us-east-2.amazonaws.com'
}); 

// define an instance of the DynamoDB
let dynamodb = new aws.DynamoDB();

createTable();
// createTable(Object)
// object that contains definition for creating the table
// 
function createTable(){
    dynamodb.createTable({
        TableName: 'Engineers',
        // Primary Key Schema
        KeySchema:[
            {
                AttributeName: 'BusinessUnit',
                KeyType: 'HASH' // PArtition Key
            },
            {
                AttributeName: 'UniqueId',
                KeyType: 'RANGE' // the Sort Key
            }
        ],
        // Define Columns, Note: It MUST match with the 
        // KeySchema Columns
        AttributeDefinitions:[
            {
                AttributeName: 'BusinessUnit',
                AttributeType:  'S' // String
            },
            {
                AttributeName: 'UniqueId',
                AttributeType:  'S' // String
            }
        ],
        // Read/Write Provision Units
        ProvisionedThroughput:{
            ReadCapacityUnits:5,
            WriteCapacityUnits: 5
        }
    },(error,data)=>{
        if(error){
            console.log(`Table creation failed ${error.message}`);
            return;
        }
        console.log(`Table Creation is successful ${data.TableDescription}`);
    });
}