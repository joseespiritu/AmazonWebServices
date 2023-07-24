import { IAMClient, ListPoliciesCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    Scope: 'Local',
};

const run = async () => {
    try {
        const result = await iamClient.send(new ListPoliciesCommand(params));
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};

run();
