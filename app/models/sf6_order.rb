class Sf6Order < ApplicationRecord
  belongs_to :client
  belongs_to :staff
  belongs_to :user
  has_many :sf6_orderservices, dependent: :destroy
  has_many :services, through: :sf6_orderservices
  accepts_nested_attributes_for :sf6_orderservices, reject_if: :all_blank, allow_destroy: true
end
