/**
 * [exports description]
 * @type {[type]}
 */

class TweetModel {

  constructor(tweet) {
    this.id = tweet.id;
    this.tweet = tweet.text;
    this.timestamp = tweet.dateCreated;
    this.url = findUrl(this.tweet);
  }

  findUrl(tweet) {
    let startIndex = tweet.indexOf('https');
    return tweet.substring(startIndex, tweet.length);
  }

}

module.exports = TweetModel;
