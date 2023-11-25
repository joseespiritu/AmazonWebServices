import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const userData = `
#!/bin/bash
yum update -y
yum install -y httpd
chkconfig httpd on
service httpd start
echo "<h1>Welcome to AWS with Javascript</h1>" > /var/www/html/index.html
`;

const userDataEncoded = new Buffer(userData).toString('base64');

const params = {
    ImageId: 'ami-0fa1ca9559f1892ec',
    MinCount: 1,
    MaxCount: 1,
    InstanceType: 't2.micro',
    KeyName: 'mykey',
    SecurityGroups: [
        'launch-wizard-1'
    ],
    UserData: userDataEncoded
};

const run = async () => {
    try {
        const data = await ec2Client.send(new RunInstancesCommand(params));
        console.log('Instance is created');
        console.log(data);
        return data;
    } catch (error) {
        console.log('Unable to create instance', error);
    }
};

run();
