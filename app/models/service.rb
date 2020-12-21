class Service < ApplicationRecord
  has_many :orderservices, dependent: :destroy
  #has_many :orders, through: :orderservices, dependent: :destroy
  has_and_belongs_to_many :orders
end
