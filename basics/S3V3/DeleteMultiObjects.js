import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const bucketParams = {
    Bucket: 'jlmetest',
    Delete: {
        Objects: [
            {
                Key: 'awsimg.png',
            },
            {
                Key: 'awsimg2.png',
            },
        ]
    }
};

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectsCommand(bucketParams));
        console.log('Objects are deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
