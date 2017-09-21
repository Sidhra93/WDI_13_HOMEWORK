require "pry"

class Animal
  def initialize(name, age, gender, species, toys)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def animal_info
    puts "----------------------\nSpecies: #{@species}\nName: #{@name}\nAge: #{@age}\nGender: #{@gender}\nToys: #{@toys.join(",")}\n----------------------"
  end
end

# binding.pry
