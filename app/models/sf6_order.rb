class Sf6Order < ApplicationRecord
  belongs_to :client
  belongs_to :user
  belongs_to :contact, class_name: "User"
  has_many :sf6_orderservices, dependent: :destroy
  has_many :services, through: :sf6_orderservices
  accepts_nested_attributes_for :sf6_orderservices, reject_if: :all_blank, allow_destroy: true
  has_many :sf6_orderutensils, dependent: :destroy
  has_many :utensils, through: :sf6_orderutensils
  accepts_nested_attributes_for :sf6_orderutensils, reject_if: :all_blank, allow_destroy: true
  has_many :epi_sf6orders, dependent: :destroy
  has_many :epis, through: :epi_sf6orders
  accepts_nested_attributes_for :epi_sf6orders, reject_if: :all_blank, allow_destroy: true

end
