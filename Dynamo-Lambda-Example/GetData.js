const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Key: {
        id: { N: "1" }
    }
};

exports.handler = async (event) => {
    try {
        const data = await dbClient.send(new GetItemCommand(params));
        console.log('Item: ', data.Item);
        return data;
    } catch (error) {
        console.log(error);
    }
}