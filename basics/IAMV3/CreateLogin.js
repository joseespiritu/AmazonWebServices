import { IAMClient, CreateLoginProfileCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    Password: 'MyPassword1',
    PasswordResetRequired: false,
    UserName: 'updated',
};

const run = async () => {
    try {
        const data = await iamClient.send(new CreateLoginProfileCommand(params));
        console.log('User is created', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
