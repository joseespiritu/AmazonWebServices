import { IAMClient, ListUsersCommand, ListUserTagsCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

async function listUsersWithTag() {
    try {
        const listUserCommand = new ListUsersCommand({});
        const listUserResponse = await client.send(listUserCommand);

        for (const user of listUserResponse.Users) {
            const userName = user.UserName;
            const listUserTagsCommand = new ListUserTagsCommand({
                UserName: userName
            });

            const listUserTagsResponse = await client.send(listUserTagsCommand);
            const tags = listUserTagsResponse.Tags;

            console.log(`User: ${userName}, Tags: ${JSON.stringify(tags)}`);
        }
    } catch (error) {
        console.log(error);
    }
};

listUsersWithTag();