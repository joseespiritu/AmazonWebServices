const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const ec2 = new AWS.EC2();

const params = {
    Description: 'Security grouyp with javascript',
    GroupName: 'sdksecurity'
};

ec2.createSecurityGroup(params, function (err, data) {
    if (err) {
        console.log('Unable to create security group', err);
    } else {
        console.log(data);
    }
});
