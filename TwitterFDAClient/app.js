// node modules
let Twit = require('twit');
let fs = require('fs');

let config = require('./config.js');

// console.log(config);

let twitter = new Twit({
  consumer_key: config['consumer_key'],
  consumer_secret: config['consumer_secret'],
  access_token: config['access_token'],
  access_token_secret: config['access_token_secret']
});

let tweetStream = twitter.stream('statuses/sample');

tweetStream.on('tweet', function(tweet) {
  console.log(tweet.user.screen_name);
  console.log(tweet.text);
});
