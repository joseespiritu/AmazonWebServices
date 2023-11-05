import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const table = 'Employee';

const params = {
    TableName: table,
    Key: {
        id: {
            N: "3"
        }
    },
    UpdateExpression: "set emp_name = :n",
    ExpressionAttributeValues: {
        ":n": {
            S: "jhon"
        }
    },
    ReturnValues: "UPDATED_NEW"
};

const run = async () => {
    try {
        const data = await ddbClient.send(new UpdateItemCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
