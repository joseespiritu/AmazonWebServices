const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'jlme-lambda12',
};

exports.myfunc = (event) => {
    s3.createBucket(params, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Bucket is created')
        }
    });
};