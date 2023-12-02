const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();

const params = {
    Template: {
        'TemplateName': 'JavascriptTemp',
        'SubjectPart': 'AWS Course with JavaScript & Node JS',
        'TextPart': 'Thanks for join',
        'HtmlPart': 'Thanks for join'
    }
};

ses.createTemplate(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Template is created', data);
    }
});
