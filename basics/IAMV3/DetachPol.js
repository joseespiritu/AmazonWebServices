import { IAMClient, DetachUserPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    PolicyArn: "arn:aws:iam::505843377963:policy/V3FullAccessPolicy",
    UserName: "updated"
};

const run = async () => {
    try {
        const data = await iamClient.send(new DetachUserPolicyCommand(params));
        console.log('Policy is detached', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
