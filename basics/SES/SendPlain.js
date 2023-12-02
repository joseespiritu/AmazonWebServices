const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();

const params = {
    Destination: {
        "ToAddresses": [
            "testemail@gmail.com",
        ],
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "Thanks for join to this"
            },
            Text: {
                Charset: "UTF-8",
                Data: "AWS Course with javascript and NodeJS",
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: "AWS Course with javascriot and NodeJS"
        },
    },
    Source: "testemail@gmail.com"
};

ses.sendEmail(params, function (err, data) {
    if (err) {
        console.log('Unable to send email', err);
    } else {
        console.log('Email is sent', data)
    }
})