let Twit = require('twit');
let fs = require('fs');

let config = require('../config/config.js');


let twitter = new Twit({
  consumer_key: config['consumer_key'],
  consumer_secret: config['consumer_secret'],
  access_token: config['access_token'],
  access_token_secret: config['access_token_secret']
});

module.exports = twitter;
