require "pry"

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# puts days_of_the_week

days_of_the_week = days_of_the_week.unshift(days_of_the_week.pop())

# puts days_of_the_week


new_days_of_the_week = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],["Saturday", "Sunday"]]

# puts new_days_of_the_week

new_days_of_the_week.pop()

puts new_days_of_the_week
