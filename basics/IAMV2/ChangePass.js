const AWS = require('aws-sdk');

const iam = new AWS.IAM();

// root user default
const params = {
    NewPassword: 'Mypassword2',
    OldPassword: 'Mypassword1'
};

iam.changePassword(params, (err, data) => {
    if (err) {
        console.log(err, err.stack)
    } else {
        console.log(data);
    }
})
