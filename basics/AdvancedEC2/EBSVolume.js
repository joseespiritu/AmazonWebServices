import { EC2Client, CreateVolumeCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    AvailabilityZone: 'us-east-1c',
    Size: 5,
    VolumeType: 'gp2',
};

const run = async () => {
    try {
        const data = await ec2Client.send(new CreateVolumeCommand(params));
        console.log('Volume is created', data);
        return data;
    } catch (error) {
        console.log('Unable to create volume', error);
    }
};

run();
