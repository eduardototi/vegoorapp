class Orderservice < ApplicationRecord
  belongs_to :service
  belongs_to :order
end
