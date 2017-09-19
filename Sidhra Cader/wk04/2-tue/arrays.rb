require "pry"

planeteers = ["earth", "wind", "Captain Planet", "fire", "water"]
rangers = ["red", "blue", "pink", "yellow", "black"]

# shows second element
planeteers[1]

# inserting "heart"  to the end of the array
planeteers.push("heart") # planeteers << "heart"

# delete "Captain Planet"
planeteers.delete("Captain Planet") # planeteers - ["Captain Planet"]

# join the two arrays
heroes = planeteers + rangers

# sorts array alphabetically but it's not case sensitive
heroes.sort!
# to make it sort you downcase all the elements in array with each
# heroes.map do |hero|
#   hero.downcase!
# end
# heroes.sort!

# randomize heroes elements
heroes.shuffle!

# get a random element from array
heroes[rand(heroes.length)] # heroes.sample


b_heroes = heroes.select do |hero|
  hero.start_with?("b") # hero[0] == "b" || hero[0] =~ /b/i
end

binding.pry
