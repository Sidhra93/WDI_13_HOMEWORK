require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"

get "/" do
  results = HTTParty.get("http://www.omdbapi.com/?t=once&apikey=2f6435d9")
  @image = HTTParty.get("http://img.omdbapi.com/?t=once&apikey=2f6435d9")
  @data = results.parsed_response
  erb :index
end


# binding.pry
