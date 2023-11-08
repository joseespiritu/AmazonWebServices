const AWS = require('aws-sdk');

const s3 = new AWS.S3();

s3.getObject({
    Bucket: 'jlmetest',
    Key: 'newfile.txt',
}, function (error, data) {
    if (error) {
        console.log('Failed to get', error, error.stack);
    } else {
        console.log('Loaded', data.ContentLength + ' bytes');
    }
});
