import { EC2Client, CreateSecurityGroupCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    Description: "This is V3 sdk security group",
    GroupName: 'v3Group',
};

const run = async () => {
    try {
        const data = await ec2Client.send(new CreateSecurityGroupCommand(params));
        console.log('Security group is created', data);
        return data;
    } catch (error) {
        console.log('Unable to create security group', error);
    }
};

run();
