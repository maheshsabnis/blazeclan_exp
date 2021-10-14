// 1. Load the aws-sdk

const aws = require('aws-sdk');
const fs = require('fs');

// configure the SDK with accessid, secretaccesskey, region, endpoint
aws.config.update({
    accessKeyId:'',
    secretAccessKey:'',
    region:'us-east-2',
    endpoint:'https://dynamodb.us-east-2.amazonaws.com'
}); 
 
// create an instance of the DocumentClient
let docClient = new aws.DynamoDB.DocumentClient();
// docClient.put(); Create new Itm
// docClient.get(); read item based on PartitionKey and Sort  Key
// docClient.update(); Update Item
// docClient.delete(); delete item
// docClient.scan(); return all items

// Read records from the JSON file engineers.json

let engineers = fs.readFileSync('./engineers.json');
// convert the data into JSON Object
let data = JSON.parse(engineers.toString());
// read each JSON record and add it in the table
data.forEach((engineer)=>{
    docClient.put({
        TableName:"Engineers",
        Item:engineer // Item represent a record to be created in the table 
    },(error,data)=>{
        if(error){
            console.log(`Data Addition Faile ${error.message}`);
            return;
        }
        console.log(`Record Added Successfully ${data.ConsumedCapacity}`);
    });
});
