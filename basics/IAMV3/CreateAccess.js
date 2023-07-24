import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    UserName: 'updated'
};

const run = async () => {
    try {
        const data = await iamClient.send(new CreateAccessKeyCommand(params));
        console.log('Access key created', data);
        return data;
    } catch (error) {
        console.log(error)
    }
};

run();
