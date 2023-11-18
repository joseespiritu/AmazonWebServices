const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
// AWS.config.update({accessKeyId: 'mykey', secretAccessKey: 'mysecret'});
const s3 = new AWS.S3();

const params = {
    Bucket: 'jlmetest',
    // ACL: 'private',
    // CreateBucketConfiguration: {
    //     'LocationConstraint': 'us-east-1',
    // }
};

s3.createBucket(params, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

