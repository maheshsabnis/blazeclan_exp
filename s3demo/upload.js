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

const uploadFile=(image)=>{
    // read the file
    const fileData = fs.readFileSync(image);

    // {} , the Resource Upload Metadta
    // e.g. BUcketName, Key(identification of resource), Body:File Contents 
    s3.upload({
        Bucket: bucket_name,
        Key: 'eye.png', // the file that will be created
        Body: fileData
    },(error,data)=>{
        if(error){
            console.log(`File Upload Error ${error.message}`);
        }
        console.log(`Resource Uploaded Successfully... ${data.Bucket}`);
    });
};

uploadFile('eye.png');