class EpiOrder < ApplicationRecord
  belongs_to :epi
  belongs_to :order
end
