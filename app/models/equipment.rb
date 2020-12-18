class Equipment < ApplicationRecord
  validates :name, presence: true
  has_many :orderservices, dependent: :destroy
  has_many :equipments, through: :orderservices, dependent: :destroy
end
