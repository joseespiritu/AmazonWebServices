import { IAMClient, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const instance_profile_name = "MyJavascriptProfile";
const role_name = "MyJavascriptRole";

async function addRoleToInstanceProfile() {
    try {
        const command = new AddRoleToInstanceProfileCommand({
            InstanceProfileName: instance_profile_name,
            RoleName: role_name
        });
        const response = await client.send(command);
        console.log(`IAM role ${role_name} add to Instance Profile ${instance_profile_name} created`, response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

addRoleToInstanceProfile();
