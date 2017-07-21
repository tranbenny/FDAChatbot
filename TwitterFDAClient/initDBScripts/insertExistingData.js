// TODO: import twitter configuration here

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
      'id': data.id,
      'text': data.text,
      'dateCreated': data.created_at
    };
    TweetModel tweet = new TweetModel(values);
    tweet.save();
  }

});
