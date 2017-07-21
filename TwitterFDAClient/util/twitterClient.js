let Twit = require('twit');
let fs = require('fs');

let TweetModel = require('./TweetModel.js');
let config = require('./config.js');


let twitter = new Twit({
  consumer_key: config['consumer_key'],
  consumer_secret: config['consumer_secret'],
  access_token: config['access_token'],
  access_token_secret: config['access_token_secret']
});
