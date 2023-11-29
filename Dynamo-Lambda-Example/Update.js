const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient();

const table = "Employee";

const params = {
    TableName: table,
    Key: {
        id: { N: "1" }
    },
    UpdateExpression: "set emp_name=:n",
    ExpressionAttributeValues: {
        ":n": { S: "updated" }
    },
    ReturnValues: "UPDATED_NEW"
};

exports.handler = async (event) => {
    try {
        const data = await dbClient.send(new UpdateItemCommand(params));
        console.log('Data is updated', data);
        return data;
    } catch (error) {
        console.log('Unable to update', error);
    }
};
