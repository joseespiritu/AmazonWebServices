import { IAMClient, DeleteUserCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    UserName: 'updated',
};

const run = async () => {
    try {
        const data = await iamClient.send(new DeleteUserCommand(params));
        console.log('User deleted', data);
        return data;
    } catch (error) {
        console.log(error)
    }
};

run();
