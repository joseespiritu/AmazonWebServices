import { EC2Client, AttachVolumeCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    Device: '/dev/sdh',
    InstanceId: 'i-0f3a4ec7d53e7db42',
    VolumeId: 'vol-01af9e70b3eabcc89'
};

const run = async () => {
    try {
        const data = await ec2Client.send(new AttachVolumeCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
