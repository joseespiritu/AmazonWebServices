import { S3Client, CreateBucketCommand, PutPublicAccessBlockCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const bucketParams = {
    Bucket: 'jlmetest',
    ObjectOwnership: 'BucketOwnerPreferred',

};

const run = async () => {
    try {
        const data = await s3Client.send(new CreateBucketCommand(bucketParams));
        console.log('Bucket is created', data);

        const input = {
            Bucket: 'jlmetest',
            PublicAccessBlockConfiguration: {
                BlockPublicAcls: false,
                IgnorePublicAcls: false,
                BlockPublicPolicy: false,
                RestrictPublicBuckets: false,
            },
        }

        const command = await s3Client.send(new PutPublicAccessBlockCommand(input));
        console.log(command);

        return {
            data,
            command
        };
    } catch (error) {
        console.log('Unable to create bucket', error);
    }
};

run();
