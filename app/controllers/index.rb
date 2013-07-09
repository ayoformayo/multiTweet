get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do

  p params
  tweet = params['tweetText']
  Twitter.update(tweet)

end
