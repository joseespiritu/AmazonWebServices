const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: 'employee'
};

dynamodb.deleteTable(params, function (err, data) {
    if (err) {
        console.log("Cannot delete", err);
    } else {
        console.log("Table is delete", data);
    }
});