class Order < ApplicationRecord
  belongs_to :user
  belongs_to :client
  has_many :orderservices
  has_many :services, through: :orderservices
  accepts_nested_attributes_for :orderservices, allow_destroy: true
end
