let config = require('./config.js');
const Twit = require('twit');

// console.log(config);

let twitter = new Twit({
  consumer_key: config['consumer_key'],
  consumer_secret: config['consumer_secret'],
  access_token: config['access_token'],
  access_token_secret: config['access_token_secret']
});

let tweetStream = twitter.stream('statuses/sample');

tweetStream.on('tweet', function(tweet) {
  console.log('---');
  console.log('screen_name', tweet.user.screen_name);
  console.log('text:', tweet.text);
});
