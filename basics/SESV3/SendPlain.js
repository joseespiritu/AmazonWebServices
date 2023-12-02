import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    Destination: {
        "ToAddresses": [
            "testemail@gmail.com",
        ],
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "Thanks for join to this, rate and review ;)"
            },
            Text: {
                Charset: "UTF-8",
                Data: "AWS Course with javascript and NodeJS, rate and review ;)",
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: "AWS Course with javascriot and NodeJS, rate and review ;)"
        },
    },
    Source: "testemail@gmail.com"
};

const run = async () => {
    try {
        const data = await sesClient.send(new SendEmailCommand(params));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
