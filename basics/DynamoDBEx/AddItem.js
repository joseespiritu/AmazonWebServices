const AWS = require('aws-sdk');

// AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: 'employee',
    Item: {
        'id': {
            'S': '2'
        },
        'name': {
            'S': 'jhon'
        },
        'age': {
            'S': '20'
        }
    }
};

dynamodb.putItem(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
