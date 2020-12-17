class Service < ApplicationRecord
  has_many :orderservices
  has_many :orders, through: :orderservices
end
