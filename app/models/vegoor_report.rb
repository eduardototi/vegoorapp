class VegoorReport < ApplicationRecord
    belongs_to :order
    has_many :orderservices, through: :orders
    has_many_attached :photos
end
