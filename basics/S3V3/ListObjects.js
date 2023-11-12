import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const bucketParams = {
    Bucket: 'jlmetest',
    Prefix: 'aws'
};

const run = async () => {
    try {
        const data = await s3Client.send(new ListObjectsCommand(bucketParams));
        console.log(data);
        data.Contents.forEach((element, index) => {
            console.log(element.Key);
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
