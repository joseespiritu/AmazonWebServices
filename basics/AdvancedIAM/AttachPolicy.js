import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const role_name = "MyJavascriptRole";

const policy_name = "MyJavascriptPolicy";

async function attachPolicyToRole() {
    try {
        const command = new AttachRolePolicyCommand({
            RoleName: role_name,
            PolicyArn: "arn:aws:iam::505843377963:policy/MyJavascriptPolicy",
        });

        const response = await client.send(command);
        console.log(`Policy ${policy_name} attached to IAM Role ${role_name}`, response);
        return response;

    } catch (error) {
        console.log(error);
    }
};

attachPolicyToRole();
