class Equipment < ApplicationRecord
  validates :name, presence: true
  has_many :orderequipments, dependent: :destroy
  has_many :orders, through: :orderequipments, dependent: :destroy
end
