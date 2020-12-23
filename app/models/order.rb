class Order < ApplicationRecord
  belongs_to :staff
  belongs_to :user
  belongs_to :client
  has_many :orderservices, dependent: :destroy
  has_many :services, through: :orderservices
  accepts_nested_attributes_for :orderservices, reject_if: :all_blank, allow_destroy: true
  has_many :orderutensils, dependent: :destroy
  has_many :utensils, through: :orderutensils
  accepts_nested_attributes_for :orderutensils, reject_if: :all_blank, allow_destroy: true
end
