const express = require('express');
const AWS = require('aws-sdk');
 

const instance = express();

instance.use(express.json());

// 3. define the AWS COnfiguration with the region
AWS.config.update({region: 'us-east-2'});

// 1. URL or Endpoint of the queue
const queueurl = "https://sqs.us-east-2.amazonaws.com/472804039072/blaze-queue-service";
// 2. create an instance of the sqs
const sqs  =new AWS.SQS({apiVersion: "2012-11-05"});

// 4. Accept the data from the Client and
// send it to SQS by creating Message Metadata
// THis means that we need to create a 
// MessageAttributes: Schema for the Message in the SQS
// datatype of Attributes must be 'String'
// MessageBody: The Complete Message
// QuquqURL
instance.post('/api/vendor',(req,resp)=>{
    // 4a. read the data from 
    let vendor = {
        VendorId: req.body.VendorId,
        VendorName: req.body.VendorName,
        MobileNo: req.body.MobileNo
    };


    // 4b. send message
    let queueMessage = sqs.sendMessage({
        MessageAttributes:{
            "vendorId":{
                DataType: "String",
                StringValue: vendor.VendorId
            },
            "vendorName":{
                DataType: "String",
                StringValue: vendor.VendorName
            },
            "mobileNo":{
                DataType: "String",
                StringValue: vendor.MobileNo
            }
        },
        MessageBody: JSON.stringify(vendor),
        QueueUrl: queueurl
    }).promise();

    // 4c. subscribe to the promise and check the execution
    // status
    queueMessage.then((data)=>{
        console.log('====================================');
        console.log(`Data Send to Queue Successfully ${data.MessageId}`);
        resp.status(200).send(`Data Send to Queue Successfully ${data.MessageId}`);
        console.log('====================================');
    }).catch((error)=>{
        console.log('====================================');
        console.log(`Messaging Failed ${error}`);
        console.log('====================================');
    });
});


instance.listen(9087,()=>{
    console.log('====================================');
    console.log('Started on port 9087');
    console.log('====================================');
});

