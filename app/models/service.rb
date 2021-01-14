class Service < ApplicationRecord
  has_many :orderservices, dependent: :destroy
  has_many :orders, through: :orderservices
  has_many :sf6_orderservices, dependent: :destroy
  has_many :sf6_orders, through: :sf6_orderservices
end
