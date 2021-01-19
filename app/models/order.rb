class Order < ApplicationRecord
  belongs_to :user
  belongs_to :client
  belongs_to :contact, class_name: "User"
  has_many :orderservices, dependent: :destroy
  has_many :services, through: :orderservices
  accepts_nested_attributes_for :orderservices, reject_if: :all_blank, allow_destroy: true
  has_many :orderutensils, dependent: :destroy
  has_many :utensils, through: :orderutensils
  accepts_nested_attributes_for :orderutensils, reject_if: :all_blank, allow_destroy: true
  has_many :epi_orders, dependent: :destroy
  has_many :epis, through: :epi_orders
  accepts_nested_attributes_for :epi_orders, reject_if: :all_blank, allow_destroy: true
end
