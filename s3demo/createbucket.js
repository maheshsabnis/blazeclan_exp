const AWS = require('aws-sdk');

// 1. set the bucket name

const bucket_name ='blazxe-s3-bucket';

// define an instance of the s3 and create the bucket
// authenticate the current application against the AWS SDK to access 
// AWS Resources e.g. S3
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

// create a bucket
// {} is the Bucket Request Object, that will be uesed to
// define Bucket Name and Locatgion 
s3.createBucket({
    Bucket: bucket_name,
    CreateBucketConfiguration:{
        // set the location
        LocationConstraint: 'us-east-2'
    }
},(error,data)=>{
    if(error){
        console.log(`Error Occured While Creating a Bucker ${error.message}`);
    }
    else {
        console.log(`Bucket Created ${data.Location}`);
    }
});