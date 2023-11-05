import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee'
};

const run = async () => {
    try {
        const data = await ddbClient.send(new DescribeTableCommand(params));
        console.log('Success', data.Table);
        console.log(data.Table.KeySchema);
        return data;
    } catch (error) {
        console.log('Error', error);
    }
};

run();
