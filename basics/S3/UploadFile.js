const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

const uploadFile = (file_name, bucket_name) => {
    const fileContent = fs.readFileSync(file_name);

    const params = {
        Bucket: bucket_name,
        Key: 'newfile.txt',
        Body: fileContent
    };

    s3.upload(params, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log('File uploaded', data);
        }
    })
};

uploadFile('file.txt', 'jlmetest');
