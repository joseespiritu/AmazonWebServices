const AWS = require('aws-sdk');

AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    RequestItems: {
        'employee': [
            {
                PutRequest: {
                    Item: {
                        'id': {
                            S: '1'
                        },
                        'name': {
                            S: 'test'
                        },
                        'age': {
                            S: '18'
                        }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        'id': {
                            S: '4'
                        },
                        'name': {
                            S: 'test2'
                        },
                        'age': {
                            S: '19'
                        }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        'id': {
                            S: '5'
                        },
                        'name': {
                            S: 'test5'
                        },
                        'age': {
                            S: '29'
                        }
                    }
                }
            }
        ]
    }
};

dynamodb.batchWriteItem(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
