import { SESClient, VerifyEmailAddressCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    EmailAddress: 'testemail@gmail.com'
};

const run = async () => {
    try {
        const data = await sesClient.send(new VerifyEmailAddressCommand(params));
        console.log('Email is added', data);
        return data;
    } catch (error) {
        console.log('Unable to add email', error);
    }
};

run();
