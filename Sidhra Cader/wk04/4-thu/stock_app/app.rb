require "yahoofinance"
require "sinatra"
require "sinatra/reloader"
require "pry"

get "/" do
  erb :index
end

get '/result' do
  # binding.pry
  @ticker = params[:stock]
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)
  erb :result
end
