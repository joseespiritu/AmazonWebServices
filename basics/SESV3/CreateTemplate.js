import { SESClient, CreateTemplateCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    Template: {
        'TemplateName': 'V3Template',
        'SubjectPart': 'AWS Course with JavaScript & Node JS',
        'TextPart': 'Welcome to the course and thanks',
        'HtmlPart': 'Thanks for join'
    }
};

const run = async () => {
    try {
        const data = await sesClient.send(new CreateTemplateCommand(params));
        console.log('Template is created', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
