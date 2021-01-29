class Sf6Orderservice < ApplicationRecord
  belongs_to :sf6_order
  belongs_to :service
  belongs_to :machine
  has_many :sf6_orderservice_reports, dependent: :destroy
end
