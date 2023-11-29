const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Key: {
        id: { N: "2" }
    }
};

exports.handler = async (event) => {
    try {
        const data = await dbClient.send(new DeleteItemCommand(params));
        console.log('Item is deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
