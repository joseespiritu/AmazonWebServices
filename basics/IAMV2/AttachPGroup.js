const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    // GroupName: 'RDSAdmins',
    // PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess'
    GroupName: 'S3Admins',
    PolicyArn: 'arn:aws:iam::aws:policy/AmazonS3FullAccess'
};

iam.attachGroupPolicy(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
})