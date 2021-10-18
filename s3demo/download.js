const AWS = require('aws-sdk');
const fs = require('fs');

// 1. set the bucket name

const bucket_name ='blazxe-s3-bucket';

// define an instance of the s3 and create the bucket
// authenticate the current application against the AWS SDK to access 
// AWS Resources e.g. S3
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

const download=()=>{
    // receive the data from S3 Bucket as 'stream'
    // write this stream into the FileSystem by piping it
    // means read the first received bit and start writing 
    // all received bit into the output file
    
    // create a WritableStream aka the expected output file
    // where the received data is written
    let outStream = fs.createWriteStream('ouputeye.png');
    // receive a readble stream from the S3 Bucket
    let receivedStream = s3.getObject({
        Bucket: bucket_name,
        Key: 'eye.png' // an identification of resource in the bucket
    }).createReadStream(); 
    // write the receivedStream into outStream
    // from the first breceived bit write every bit into outStream
    receivedStream.pipe(outStream);
    console.log(`The File is Downloaded Successfully....`);
};

download();