require_relative "monkey"

adam = Monkey.new("Adam", "Spider Monkey")
tony = Monkey.new("Tony", "Chimpanzee")

adam.eat("fruit salad")
adam.eat("banana milkshake")

tony.eat("bananas")
tony.eat("peanuts")

puts adam.introduce
puts tony.introduce
