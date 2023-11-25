import { EC2Client, ModifyVolumeCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    VolumeId: 'vol-01af9e70b3eabcc89',
    Size: 7
};

const run = async () => {
    try {
        const data = await ec2Client.send(new ModifyVolumeCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
