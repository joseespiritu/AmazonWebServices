const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const ec2 = new AWS.EC2();

/* ec2.describeSecurityGroups(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); */

ec2.describeSecurityGroupRules(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
