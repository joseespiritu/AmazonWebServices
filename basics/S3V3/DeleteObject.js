import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const bucketParams = {
    Bucket: 'jlmetest',
    Key: 'awsimg.png'
};

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
        console.log('Object is deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
