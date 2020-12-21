class Order < ApplicationRecord
  belongs_to :staff
  belongs_to :user
  belongs_to :client
  has_and_belongs_to_many :services, dependent: :destroy
  has_many :orderservices, dependent: :destroy
  has_many :orderequipments, dependent: :destroy
  has_and_belongs_to_many :equipments, dependent: :destroy
end
