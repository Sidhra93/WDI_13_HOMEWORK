file_name = "file_data.txt"

# puts `wc -l #{file_name}`.to_i

puts ("#{IO.readlines(file_name).size} line(s)")
