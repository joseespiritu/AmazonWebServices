const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const ec2 = new AWS.EC2();

const params = {
    KeyName: 'mykey'
};

ec2.deleteKeyPair(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Key pair is deleted', data);
    }
});
