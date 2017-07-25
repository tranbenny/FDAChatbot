let twitter = require('../util/twitterClient.js');
let TweetModel = require('../models/TweetModel.js');


let options = {
  screen_name: 'FDArecalls',
  count: 200
};

twitter.get('statuses/user_timeline', options, function(err, data) {
  if (err) {
    console.log('ERROR OCCURED');
  }
  for (let i = 0; i < data.length; i++) {
    let values = {
      'id': data[i].id,
      'text': data[i].text,
      'dateCreated': data[i].created_at
    };
    let tweet = new TweetModel(values);
    tweet.save();
  }

});
