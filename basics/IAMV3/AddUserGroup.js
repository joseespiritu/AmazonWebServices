import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    GroupName: 'RDSAdmins',
    UserName: 'updated',
};

const run = async () => {
    try {
        const data = await iamClient.send(new AddUserToGroupCommand(params));
        console.log('Success', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
