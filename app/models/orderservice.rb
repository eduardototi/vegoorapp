class Orderservice < ApplicationRecord
  belongs_to :service
  belongs_to :order
  validates :service_id, presence: true
  validates :order_id, presence: true
end
