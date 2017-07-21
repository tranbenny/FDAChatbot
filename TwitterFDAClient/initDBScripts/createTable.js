let dynamo = require('../util/dbconnection.js');

let params = {
    TableName: "FDATweets",
    KeySchema: [
      { AttributeName: "id", KeyType: "HASH"}
    ],
    AttributeDefinitions: [
      { AttributeName: "id", AttributeType: "S"}
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10
    }
};

dynamo.createTable(params);
