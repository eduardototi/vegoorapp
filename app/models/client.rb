class Client < ApplicationRecord
  belongs_to :user
  has_many :service_orders
end
