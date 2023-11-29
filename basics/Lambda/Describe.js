import { LambdaClient, GetFunctionCommand } from "@aws-sdk/client-lambda";

const lambdaClient = new LambdaClient();

const params = {
    FunctionName: 'HelloLambda'
};

const run = async () => {
    try {
        const data = await lambdaClient.send(new GetFunctionCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
