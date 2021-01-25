class Orderservice < ApplicationRecord
  belongs_to :service
  belongs_to :order
  belongs_to :machine
  has_many :orderservice_reports, dependent: :destroy
end
