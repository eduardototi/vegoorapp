class Machine < ApplicationRecord
  belongs_to :orderservices
  belongs_to :sf6_orderservices
end
