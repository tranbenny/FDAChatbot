let Twit = require('twit');
let config = require('./config.js');

let fs = require('fs');


let twitter = new Twit({
  consumer_key: config['consumer_key'],
  consumer_secret: config['consumer_secret'],
  access_token: config['access_token'],
  access_token_secret: config['access_token_secret']
});

let options = {
  screen_name: 'FDArecalls',
  count: 200
};

twitter.get('statuses/user_timeline', options, function(err, data) {
  if (err) {
    console.log('ERROR OCCURED');
  }
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].text);
  // }
  console.log(data.length);
});
