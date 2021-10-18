const AWS = require('aws-sdk');
// sqs-consumer: The package used to write
// consumer for the messages in SQS
// Consumer: The class that provides events for
// 1. HandleMessage to Receive it
// 2. Handling Errors of Communication with the SQS
// 3. Handling Error while processing messages in SQS
const {Consumer} = require('sqs-consumer');
AWS.config.update({region: 'us-east-2'});
// 1. URL or Endpoint of the queue
const queueurl = "https://sqs.us-east-2.amazonaws.com/472804039072/blaze-queue-service";
// the sqs object is created using AWS for the identity (AccessId, Secret Key)
// so that the data message from queue can be read
const sqs = new AWS.SQS({apiVersion: "2012-11-05"});
const consumer = Consumer.create({
    queueUrl:queueurl,
    handleMessage:async(message)=>{
        // received and porcess message
        console.log('====================================');
        console.log(`Received Message is = ${JSON.stringify(message.Body)}`);
        console.log('====================================');
    },
    sqs:sqs, // set the context communication with the SQS under the regions and AccessID adn SecretKey
    batchSize:10 //max no of messages to be read
});

// subscribe to Error EVents
consumer.on('error', (error)=>{
    console.log('====================================');
    console.log(`Error Occured while conecting to Queue ${error.message}`);
    console.log('====================================');
}); 

consumer.on('processing_error', (error)=>{
    console.log('====================================');
    console.log(`Error Occured while processing message from the Queue ${error.message}`);
    console.log('====================================');
}); 

// start the consumer
consumer.start();