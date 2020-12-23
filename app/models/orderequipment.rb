class Orderequipment < ApplicationRecord
  belongs_to :order
  belongs_to :equipment
end
