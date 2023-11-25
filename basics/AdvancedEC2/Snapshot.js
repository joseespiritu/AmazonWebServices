import { EC2Client, CreateSnapshotCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    VolumeId: 'vol-01af9e70b3eabcc89'
};

const run = async () => {
    try {
        const data = await ec2Client.send(new CreateSnapshotCommand(params));
        console.log('Snapshot is created', data);
        return data;
    } catch (error) {
        console.log('Unable to create snapshot', error);
    }
};

run();
