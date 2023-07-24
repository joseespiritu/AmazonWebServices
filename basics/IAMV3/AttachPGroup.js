import { IAMClient, AttachGroupPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    GroupName: 'RDSAdmins',
    PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess'
};

const run = async () => {
    try {
        const data = await iamClient.send(new AttachGroupPolicyCommand(params));
        console.log('Policy is attached to group', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
