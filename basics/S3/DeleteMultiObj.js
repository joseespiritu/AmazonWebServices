const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'jlmetest',
    Delete: {
        Objects: [
            {
                Key: 'awsimg.png'
            },
            {
                Key: 'newfile.txt'
            }
        ]
    }
};

s3.deleteObjects(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Objects are deleted', data);
    }
});
