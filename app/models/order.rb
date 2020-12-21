class Order < ApplicationRecord
  belongs_to :staff
  belongs_to :user
  belongs_to :client
  has_and_belongs_to_many :services
  has_many :orderservices, dependent: :destroy
  #has_many :services, through: :orderservices, dependent: :destroy
  #accepts_nested_attributes_for :orderservices, allow_destroy: true
  has_many :orderequipments, dependent: :destroy
  #has_many :equipments, through: :orderequipments, dependent: :destroy
  #accepts_nested_attributes_for :orderequipments, allow_destroy: true
  has_and_belongs_to_many :equipments
end
