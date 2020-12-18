class Orderequipment < ApplicationRecord
  belongs_to :order
  belongs_to :equipment
  validates :equipment_id, presence: true
  validates :order_id, presence: true
end
