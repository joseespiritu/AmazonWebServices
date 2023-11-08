const AWS = require('aws-sdk');

const s3 = new AWS.S3();

s3.listBuckets(function (error, data) {
    if (error) {
        console.log(error, error.stack);
    } else {
        console.log(data.Buckets);
    }
});
