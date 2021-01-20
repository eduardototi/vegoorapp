class Sf6Report < ApplicationRecord
  belongs_to :sf6_order
  has_many :sf6_orderservices, through: :sf6_orders
end
