import { IAMClient, CreateInstanceProfileCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const instance_profile_name = "MyJavascriptProfile";

async function createInstanceProfile() {
    try {
        const command = new CreateInstanceProfileCommand({
            InstanceProfileName: instance_profile_name
        });

        const response = await client.send(command);
        console.log(`IAM Instance Profile ${instance_profile_name} created`, response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

createInstanceProfile();
