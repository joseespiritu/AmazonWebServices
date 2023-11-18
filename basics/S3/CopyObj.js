const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'jlmetest-copy',
    CopySource: 'jlmetest/awsimg.png',
    Key: 'copied.png'
};

s3.copyObject(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log('Data is copied', data);
    }
});

