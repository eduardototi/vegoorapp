class Epi < ApplicationRecord
  has_many :epi_orders, dependent: :destroy
  has_many :epi_orders, through: :epi_orders
end
