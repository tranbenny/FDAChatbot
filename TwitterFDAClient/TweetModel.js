/**
 * [exports description]
 * @type {[type]}
 */

class TweetModel {

  constructor(tweet) {
    this.body = tweet.text;
    this.timestamp = formatDate(tweet.timestamp_ms);
  }

  formatDate(timeMs) {
    let date = new Date(timeMs);
    return date.toJSON();
  }

}

module.exports = TweetModel;
