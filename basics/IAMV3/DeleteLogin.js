import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    UserName: 'updated'
};

const run = async () => {
    try {
        const data = await iamClient.send(new DeleteLoginProfileCommand(params));
        console.log('Login profile deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
