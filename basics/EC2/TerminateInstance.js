const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const ec2 = new AWS.EC2();

const params = {
    InstanceIds: [
        'i-0813c1fc914da380e'
    ]
};

ec2.terminateInstances(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Instance is terminated', data);
    }
});
