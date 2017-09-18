require "pry"

puts "Guess Number between 0 and 10"
user_number = gets.to_i

number = Random.rand(10)

while user_number != number
  puts ("#{number} random")
  puts ("#{user_number} user input")
  puts "Guess Again"
  user_number = gets.to_i
end
puts "Congratulations"
