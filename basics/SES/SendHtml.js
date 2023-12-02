const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();

const html_contents = "<html>" +
    "<h1 style='text-align:center'>AWS with JavaScript and NodeJS</h1>" +
    "<p style='color:red'>Welcome to the course and thanks</p>"
    + "</html>";

const params = {
    Destination: {
        "ToAddresses": [
            "testemail@gmail.com"
        ]
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: html_contents
            }
        },
        Subject: {
            Charset: "UTF-8",
            Data: "AWS Course with Javascript & NodeJS"
        }
    },
    Source: "testemail@gmail.com"
};

ses.sendEmail(params, function (err, data) {
    if (err) {
        console.log('Unable to send email', err);
    } else {
        console.log('email is send', data);
    }
});
