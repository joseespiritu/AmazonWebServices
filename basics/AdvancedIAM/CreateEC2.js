import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2";

const client = new EC2Client();

const instance_profile_name = "MyJavascriptProfile";

const params = {
    ImageId: 'ami-0230bd60aa48260c6',
    InstanceType: 't2.micro',
    MinCount: 1,
    MaxCount: 1,
    IamInstanceProfile: {
        Name: instance_profile_name
    }
};

async function launchEc2Instance() {
    try {
        const command = new RunInstancesCommand(params);
        const response = await client.send(command);

        console.log("Instance is launched", response);
        return response;

    } catch (error) {
        console.log(error);
    }
};

launchEc2Instance();
