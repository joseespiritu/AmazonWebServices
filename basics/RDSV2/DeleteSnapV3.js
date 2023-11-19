import { RDSClient, DeleteDBSnapshotCommand } from "@aws-sdk/client-rds";

const rdsClient = new RDSClient();

const params = {
    DBSnapshotIdentifier: 'myrds-final-snapshot'
};

const run = async () => {
    try {
        const data = await rdsClient.send(new DeleteDBSnapshotCommand(params));
        console.log('DB Snapshot is deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
