import { S3Client, CopyObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const params = {
    Bucket: 'jlmetest-copy',
    CopySource: 'jlmetest/awsimg.png',
    Key: 'copyid.png'
};

const run = async () => {
    try {
        const data = await s3Client.send(new CopyObjectCommand(params));
        console.log('Object has been copied', data);
        return data;
    } catch (error) {
        console.log('Unable to copy object', error);
    }
};

run();
