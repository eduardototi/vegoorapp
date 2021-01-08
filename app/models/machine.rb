class Machine < ApplicationRecord
  has_many :orderservices
  has_many :sf6_orderservices
end
