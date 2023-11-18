const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'jlmetest',
    Key: 'awsimg.png',
    ObjectAttributes: [
        'StorageClass',
        'ObjectSize',
        'ETag'
    ]
};

s3.getObjectAttributes(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
