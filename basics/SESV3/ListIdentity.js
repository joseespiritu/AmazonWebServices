import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    IdentityType: 'EmailAddress'
};

const run = async () => {
    try {
        const data = await sesClient.send(new ListIdentitiesCommand(params));
        console.log(data.Identities);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
