const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();

const params = {
    Source: 'testemail@gmail.com',
    Destination: {
        'ToAddresses': ['testemail@gmail.com', 'testemail@gmail.com'],
        'CcAddresses': ['testemail@gmail.com']
    },
    ReplyToAddresses: ['testemail@gmail.com'],
    Template: 'JavascriptTemp',
    TemplateData: '{"replace":"value"}'
};

ses.sendTemplatedEmail(params, function (err, data) {
    if (err) {
        console.log('Unable to send email', err);
    } else {
        console.log('email is send', data);
    }
});
