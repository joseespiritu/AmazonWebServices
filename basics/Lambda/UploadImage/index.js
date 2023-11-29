const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

exports.handler = (event) => {
    const fileContent = fs.readFileSync('aws.png');
    const params = {
        Bucket: 'jlme-lambda12',
        Key: 'awsimg.png',
        Body: fileContent,
    };

    s3.putObject(params, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Image Uploaded', data);
        }
    })
};
