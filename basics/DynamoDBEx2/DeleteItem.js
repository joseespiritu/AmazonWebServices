const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";
const year = 2022;
const title = "New Movie";

const params = {
    TableName: table,
    Key: {
        "year": year,
        "title": title,
    }
};

console.log("Movie is deleting...");

docClient.delete(params, function (err, data) {
    if (err) {
        console.log("Unable to delete", err);
    } else {
        console.log("Item is deleted", data);
    }
});
