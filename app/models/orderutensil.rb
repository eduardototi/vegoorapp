class Orderutensil < ApplicationRecord
  belongs_to :order
  belongs_to :utensil
end
