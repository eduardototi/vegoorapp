class Sf6OrderserviceReport < ApplicationRecord
  belongs_to :sf6_orderservice
  has_many_attached :photos
end
