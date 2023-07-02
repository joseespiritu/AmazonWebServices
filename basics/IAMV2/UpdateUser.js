const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    NewUserName: 'jhon',
    UserName: 'updated'
}

iam.updateUser(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})