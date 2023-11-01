const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

// Create backup
// const params = {
//     BackupName: 'employeebackup',
//     TableName: 'employee'
// };

// dynamodb.createBackup(params, function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// Delete backup
const params = {
    BackupArn: 'arn:aws:dynamodb:us-east-1:505843377963:table/employee/backup/01698625605275-c6dcc845'
};

dynamodb.deleteBackup(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
