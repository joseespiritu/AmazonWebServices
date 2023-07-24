import { IAMClient, AttachUserPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    PolicyArn: "arn:aws:iam::505843377963:policy/V3FullAccessPolicy",
    UserName: "updated"
};

const run = async () => {
    try {
        const result = await iamClient.send(new AttachUserPolicyCommand(params));
        console.log(result);
        return result;
    } catch (error) {
        console.log(error)
    }
};

run();
