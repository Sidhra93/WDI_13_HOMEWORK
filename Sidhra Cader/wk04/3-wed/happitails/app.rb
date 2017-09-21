require_relative "animal"
require_relative "client"
require "pry"

animals = []
clients =[]
show_menu = true

def add_animal(animals)
  puts "Enter animal name:"
  animal_name = gets.chomp
  puts "Enter age:"
  age = gets.chomp
  puts "Enter gender:"
  gender = gets.chomp
  puts "Enter species:"
  species = gets.chomp
  puts "Enter toys:"
  toys = gets.chomp.split(",")
  animals.push(Animal.new(animal_name, age, gender, species, toys))
  puts "ANIMAL ADDED!!"
  return true
end

def show_animals(animals)
  animals.each do |animal|
    animal.animal_info
  end
  return true
end

def add_client(clients)
  puts "Enter name:"
  client_name = gets.chomp
  puts "Enter age:"
  age = gets.chomp
  puts "Enter number of children"
  number_of_children = gets.chomp
  puts "Enter pet(s):"
  pets = gets.chomp.split(",")
  clients.push(Client.new(client_name, age, number_of_children, pets))
  puts "CLIENT ADDED!!"
  return true
end

def show_clients(clients)
  clients.each do |client|
    client.client_info
  end
  return true
end

while show_menu
  puts "-------- MENU --------\n1-Add an Animal\n2-Show Animals\n3-Add a Client\n4-Show Clients\n5-Exit"
  puts "Enter number of option:"
  option = gets.chomp
  if option == "1"
    show_menu = add_animal(animals)
  elsif option == "2"
    show_menu = show_animals(animals)
  elsif option == "3"
    show_menu = add_client(clients)
  elsif option == "4"
    show_menu = show_clients(animals, clients)
  elsif option == "5"
    return;
  end
end
