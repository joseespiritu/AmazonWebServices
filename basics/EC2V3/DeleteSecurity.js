import { EC2Client, DeleteSecurityGroupCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    GroupId: 'sg-0ccf5a8fb2dca1d7a'
};

const run = async () => {
    try {
        const data = await ec2Client.send(new DeleteSecurityGroupCommand(params));
        console.log('SecurityGroup Deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
