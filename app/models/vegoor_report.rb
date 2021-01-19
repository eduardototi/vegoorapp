class VegoorReport < ApplicationRecord
    belongs_to :order
    has_many :orderservices, through: :orders
end
