import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const role_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
};

const params = {
    AssumeRolePolicyDocument: JSON.stringify(role_policy),
    RoleName: 'JavascriptLambdaRole',
};

const run = async () => {
    try {
        const data = await iamClient.send(new CreateRoleCommand(params));
        console.log('Role is created', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
