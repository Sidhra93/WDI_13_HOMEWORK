class Client
  def initialize(name)
    @name = name
    @age = ""
    @number_of_children = ""
    @list_of_pets = []
  end

  def client_info
    puts "---------------------\nClient Name: #{@name}\nAge: #{@age}\nNumber of Children: #{@number_of_children}\nPets: #{@list_of_pets.join(",")}\n---------------------"
  end

end
