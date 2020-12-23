class Utensil < ApplicationRecord    
    has_many :orderutensils, dependent: :destroy
    has_many :orders, through: :orderutensils
end
