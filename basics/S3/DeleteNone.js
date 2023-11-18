const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const DeleteBucket = async (bucket) => {
    try {
        console.log(`Deleting ${bucket}`);
        const { Contents } = await s3.listObjects({ Bucket: bucket }).promise();
        if (Contents.length > 0) {
            await s3.deleteObjects({
                Bucket: bucket,
                Delete: {
                    Objects: Contents.map(({ Key }) => ({ Key }))
                }
            }).promise();
        }

        await s3.deleteBucket({ Bucket: bucket }).promise();
        return true;

    } catch (error) {
        console.log('Cannot delete bucket', error);
        return false;
    }
};

DeleteBucket('jlmetest');
