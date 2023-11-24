import { EC2Client, TerminateInstancesCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    InstanceIds: [
        'i-0e15581a6d59cd00f'
    ]
};

const run = async () => {
    try {
        const data = await ec2Client.send(new TerminateInstancesCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();