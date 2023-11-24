import { EC2Client, DescribeSecurityGroupsCommand, DescribeSecurityGroupRulesCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

/* const run = async () => {
    try {
        const data = await ec2Client.send(new DescribeSecurityGroupsCommand({}));
        console.log(data.SecurityGroups);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run(); */

const run = async () => {
    try {
        const data = await ec2Client.send(new DescribeSecurityGroupRulesCommand({}));
        console.log(data.SecurityGroupRules);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
