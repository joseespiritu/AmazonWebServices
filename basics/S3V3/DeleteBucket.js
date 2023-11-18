import { S3Client, DeleteBucketCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const params = {
    Bucket: 'jlmetest'
};

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteBucketCommand(params));
        console.log('Bucket is deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
