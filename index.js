const Twitter = require('twitter')

exports.handler = (event, context) => {
  const attributes = event['placementInfo']['attributes']
  const consumer_key = attributes['twitter_consumer_key']
  const consumer_secret = attributes['twitter_consumer_secret']
  const access_token_key = attributes['twitter_access_token_key']
  const access_token_secret = attributes['twitter_access_token_secret']
  const message = attributes['message'] + ' ' + new Date()


  const client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
  })

  client.post('statuses/update', { status: message }, (e, tweet, res) => {
    if (e) {
      console.log(e)
      throw(e)
    }

    console.log(tweet)

    context.done(null)
  })
};
