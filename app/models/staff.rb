class Staff < ApplicationRecord
  validates :registration, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true
  belongs_to :user
  has_many :orders
  has_many :sf6_orders
end
