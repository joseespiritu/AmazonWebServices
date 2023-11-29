const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'N'
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 3,
        WriteCapacityUnits: 3,
    },
};

exports.handler = async (event) => {
    try {
        const data = await dbClient.send(new CreateTableCommand(params));
        console.log('Table is created', data);
        return data;
    } catch (error) {
        console.log('Table is not created', error);
    }
};
