require "pry"

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# acces Jonathan's Twitter handler "tronathan"
users["Jonathan"][:twitter]

# add number 7 to Erik's fav numbers
users["Erik"][:favorite_numbers].push(7)

# add yourself to users
users.merge!({"Sidhra"=>{:twitter=>"dramasaurusrex",:favorite_numbers=>[19, 6, 93]}})

# return array of erik's numbers
users["Erik"][:favorite_numbers]

# return smallest of erik's numbers
users["Erik"][:favorite_numbers].min

# return array of Anil's numbers that are even
users["Anil"][:favorite_numbers].select do |number|
  number.even?
end

binding.pry

# return array of fav numbers of all users
users.each do |user|
  user[:favorite_numbers]
end

#array of numbers sorted and excluding duplicates
