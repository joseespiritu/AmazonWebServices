import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import { readFileSync } from 'fs';


const s3Client = new S3Client();

const run = async (fileName) => {
    try {
        const fileContent = readFileSync(fileName);
        const bucketParams = {
            Bucket: 'jlmetest',
            ALC: 'private',
            Key: 'awsimg.png',
            Body: fileContent
        };

        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        console.log(data);
        return data;
    } catch (error) {
        console.log("Unable to upload the image", error);
    }
};

run('aws.png');
