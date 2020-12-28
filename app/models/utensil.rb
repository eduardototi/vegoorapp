class Utensil < ApplicationRecord
  has_many :orderutensils, dependent: :destroy
  has_many :orders, through: :orderutensils
  has_many :sf6_orderutensils, dependent: :destroy
  has_many :sf6_orders, through: :sf6_orderutensils
end
