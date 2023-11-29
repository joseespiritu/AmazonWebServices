import { LambdaClient, CreateFunctionCommand } from "@aws-sdk/client-lambda";

const lambdaClient = new LambdaClient();

const params = {
    Code: {
        S3Bucket: 'jlme-lambda12',
        S3Key: 'lambda.zip'
    },
    FunctionName: 'HelloLambda',
    Runtime: 'nodejs18.x',
    Role: 'arn:aws:iam::505843377963:role/JavascriptLambdaRole',
    Handler: 'index.hanlder',
    Timeout: 300,
}

const run = async () => {
    try {
        const data = await lambdaClient.send(new CreateFunctionCommand(params));
        console.log('Lambda Function is created', data);
        return data;
    } catch (error) {
        console.log('Unable to create function', error);
    }
};

run();
