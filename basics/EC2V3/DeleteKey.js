import { EC2Client, DeleteKeyPairCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    KeyName: 'v3key'
};

const run = async () => {
    try {
        const data = await ec2Client.send(new DeleteKeyPairCommand(params));
        console.log('Key pair is deleted', data);
        return data;
    } catch (error) {
        console.log('Unable to delete key pair', error);
    }
};

run();
