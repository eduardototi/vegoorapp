class OrderserviceReport < ApplicationRecord
  belongs_to :orderservice
  has_one_attached :photo
end
