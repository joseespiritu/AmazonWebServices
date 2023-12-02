const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();

const params = {
    TemplateName: 'JavascriptTemp'
}

// ses.getTemplate(params, function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

ses.listTemplates(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.TemplatesMetadata)
    }
});
