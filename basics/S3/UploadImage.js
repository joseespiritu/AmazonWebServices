const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

const uploadImage = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: 'jlmetest',
        ACL: 'private',
        Key: 'awsimg.png',
        Body: fileContent
    };

    s3.putObject(params, function (error, data) {
        if (error) {
            console.log(error)
        } else {
            console.log(data);
        }
    })
};

uploadImage('aws.png');
