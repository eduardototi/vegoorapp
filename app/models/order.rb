class Order < ApplicationRecord
  belongs_to :staff
  belongs_to :user
  belongs_to :client
  has_many :orderservices, dependent: :destroy
  has_many :services, through: :orderservices
  accepts_nested_attributes_for :orderservices, allow_destroy: true
  has_many :orderequipments, dependent: :destroy
  has_many :equipments, through: :orderequipments
  accepts_nested_attributes_for :orderequipments, allow_destroy: true
end
