require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"

get "/" do

  erb :index
end

get "/results" do
  @movie = "";
  search = params[:search]
  results = HTTParty.get("http://www.omdbapi.com/?s=#{search}&apikey=#{ENV["OMDB_API_KEY"]}")
  data = results.parsed_response
  @data_array = data["Search"]
  erb :results
end

get '/about' do
  movie = params[:search]
  # binding.pry
  results = HTTParty.get("http://www.omdbapi.com/?t=#{movie}&apikey=#{ENV["OMDB_API_KEY"]}")
  # binding.pry
  @data = results.parsed_response
  erb :about
end

# binding.pry
