/**
 * [exports description]
 * @type {[type]}
 */
let dbconnection = require('../util/dbconnection');
const tableName = "FDATweets";


class TweetModel {

  constructor(tweet) {
    this.id = tweet.id;
    this.body = tweet['text'];
    this.timestamp = tweet.dateCreated;
    this.url = this.findUrl(this.body);
  }

  findUrl(tweetText) {
    let startIndex = tweetText.indexOf('https');
    return tweetText.substring(startIndex, tweetText.length);
  }

  save() {
    let params = {
      TableName: "FDATweets",
      Item: {
        "id": this.id,
        "body": this.body,
        "timestamp": this.timestamp,
        "url": this.url
      }
    };
    dbconnection.save(params);
  }

}

module.exports = TweetModel;
