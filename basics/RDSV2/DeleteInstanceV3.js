import { RDSClient, DeleteDBInstanceCommand } from "@aws-sdk/client-rds";

const rdsClient = new RDSClient();

const params = {
    DBInstanceIdentifier: 'myrds',
    DeleteAutomatedBackups: true,
    FinalDBSnapshotIdentifier: 'myrds-final-snapshot',
    SkipFinalSnapshot: false,
};

const run = async () => {
    try {
        const data = await rdsClient.send(new DeleteDBInstanceCommand(params));
        console.log('DB Instance is deleted', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

run();
