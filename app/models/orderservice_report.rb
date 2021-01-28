class OrderserviceReport < ApplicationRecord
  belongs_to :orderservice
  has_many_attached :photos
end
