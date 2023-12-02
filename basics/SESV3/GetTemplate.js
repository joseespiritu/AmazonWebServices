import { SESClient, GetTemplateCommand, ListTemplatesCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

/* const params = {
    TemplateName: 'V3Template',
};

const run = async () => {
    try {
        const data = await sesClient.send(new GetTemplateCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run(); */

const run = async () => {
    try {
        const data = await sesClient.send(new ListTemplatesCommand({}));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();