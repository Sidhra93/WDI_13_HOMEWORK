require "pry"

ninja_turtle = {
  name: "Michaelangelo",
  weapon: "Nunchuks",
  radical: true
}

# inserting new key-value pair
ninja_turtle[:age] = 10

# removing key-value pair
ninja_turtle.delete(:radical)

#
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

# access first value
ninja_turtle[:pizza_toppings][0] # ninja_turtle[:pizza_toppings].first

# access the keys
ninja_turtle.keys

ninja_turtle.each{|key, val| puts "#{key} is equal to #{val}"}

binding.pry
