import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    ImageId: 'ami-0230bd60aa48260c6',
    MaxCount: 1,
    MinCount: 1,
    InstanceType: 't2.micro',
    KeyName: 'v3key',
    SecurityGroups: [
        'v3Group'
    ],
};

const run = async () => {
    try {
        const data = await ec2Client.send(new RunInstancesCommand(params));
        console.log('Instance is created', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
