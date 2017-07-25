/**
 * Main file for performing read/writes to DynamoDB database
 * @type {[type]}
 */

let config = require('../config/config.js');
let AWS = require('aws-sdk');
// connect to aws dynamodb instance
AWS.config.update({
  region: "us-east-1",
  accessKeyId: config["aws_access_key_id"],
  secretAccessKey: config["aws_secret_access_key"]
});

let dynamodb = new AWS.DynamoDB();

function createTable(params) {
  dynamodb.createTable(params, function(err, data) {
    if (err) {
      console.error("Unable to create table. Error JSON: ", JSON.stringify(err, null, 2));
    } else {
      console.log("Created table. Table description JSON: ", JSON.stringify(data, null, 2));
    }
  });
}

function saveValues(params) {
  let docClient = new AWS.DynamoDB.DocumentClient();
  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to insert values. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log(params.id + " added successfully");
    }
  })
}

module.exports = {
  createTable: createTable,
  save: saveValues
};
