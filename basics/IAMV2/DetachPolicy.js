const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    PolicyArn: "arn:aws:iam::505843377963:policy/newuserfullpolicy",
    UserName: 'bob'
};

iam.detachUserPolicy(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})