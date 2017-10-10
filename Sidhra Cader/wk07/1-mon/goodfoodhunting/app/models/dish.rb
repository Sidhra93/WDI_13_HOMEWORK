class Dish < ApplicationRecord
  has_many :comments
  has_many :venues
end
