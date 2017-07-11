let config = require('./config.js');
let AWS = require('aws-sdk');

// connect to aws dynamodb instance
AWS.config.update({
  region: "us-east-1",
  accessKeyId: config["aws_access_key_id"],
  secretAccessKey: config["aws_secret_access_key"]
});

let dynamodb = new AWS.DynamoDB();

let params = {
    TableName: "Movies",
    KeySchema: [
      { AttributeName: "year", KeyType: "HASH"},
      { AttributeName: "title", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
      { AttributeName: "year", AttributeType: "N"},
      { AttributeName: "title", AttributeType: "S"}
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error("Unable to create table. Error JSON: ", JSON.stringify(err, null, 2));
  } else {
    console.log("Created table. Table description JSON: ", JSON.stringify(data, null, 2));
  }
});
