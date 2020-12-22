class Service < ApplicationRecord
  has_many :orderservices, dependent: :destroy
  has_many :orders, through: :orderservices
end
