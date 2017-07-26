console.log('Loading event');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();


exports.handler = function(event, context, callback) {
    var tableName = 'FDATweets';
    dynamodb.scan({
        TableName: tableName,
        Limit: 10
    }, function(err, data) {
      if (err) {
        context.done('error', 'reading dynamodb failed: ' + err);
      }
      for (var i in data.Items) {
        i = data.Items[i];
        console.log(i);
      }
    });
};
