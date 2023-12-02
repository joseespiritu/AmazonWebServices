import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    Source: 'testemail@gmail.com',
    Destination: {
        'ToAddresses': ['testemail@gmail.com'],
        'CcAddresses': ['testemail@gmail.com']
    },
    ReplyToAddresses: ['testemail@gmail.com'],
    Template: 'V3Template',
    TemplateData: '{"replace":"value"}'
};

const run = async () => {
    try {
        const data = await sesClient.send(new SendTemplatedEmailCommand(params));
        console.log('Email is sended', data);
        return data;
    } catch (error) {
        console.log('Unable to send email', error);
    }
};

run();
