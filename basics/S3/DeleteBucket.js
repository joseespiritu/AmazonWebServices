const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'jlmetest'
};

s3.deleteBucket(params, function (error, data) {
    if (error) {
        console.log(error, error.stack);
    } else {
        console.log('Bucket deleted', data);
    }
});
