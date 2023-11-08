const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'jlmetest',
    Prefix: 'aws'
};

s3.listObjects(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        data.Contents.forEach((element, index) => {
            console.log(element);
        });
    }
})
