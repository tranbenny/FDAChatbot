let Twit = require('twit');
let config = require('./config.js');

let fs = require('fs');

let twitter = new Twit({
  consumer_key: config['consumer_key'],
  consumer_secret: config['consumer_secret'],
  access_token: config['access_token'],
  access_token_secret: config['access_token_secret']
});

let params = {
  q: 'from:FDArecalls',
  count: 100
};

twitter.get('search/tweets', params)
  .catch(function(err) {
    console.log('error occured', err.stack);
  })
  .then(function(result) {
    console.log(result.data['statuses'].length);
    fs.writeFile('./tmp/samples', JSON.stringify(result), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('file was saved');
    });
  });
