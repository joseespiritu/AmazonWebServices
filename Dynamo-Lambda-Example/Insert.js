const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Item: {
        id: {
            N: "1"
        },
        emp_name: {
            S: "jose"
        },
    },
};

exports.handler = async (event) => {
    try {
        const data = await dbClient.send(new PutItemCommand(params));
        console.log('Data inserted', data);
        return data;
    } catch (error) {
        console.log('Unable to insert', error);
    }
};
