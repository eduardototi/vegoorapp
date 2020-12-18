class Order < ApplicationRecord
  belongs_to :user
  belongs_to :client
  has_many :orderservices, dependent: :destroy
  has_many :services, through: :orderservices, dependent: :destroy
  accepts_nested_attributes_for :orderservices, allow_destroy: true
end
