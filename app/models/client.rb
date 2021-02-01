STATES = ["AC", "AL", "AP", "AM", "BA", "CE", "DF",
          "ES", "GO", "MA", "MT", "MS", "MG", "PA",
          "PB", "PR", "PE", "PI", "RJ", "RN", "RS",
          "RO", "RR", "SC", "SP", "SE", "TO"]

class Client < ApplicationRecord
  has_many :users
  has_many :orders
  has_many :sf6_orders
  has_many :services, through: :orders
  has_many :servicers, through: :sf6_orders
  validates :cep, presence: true
  validates :razao_social, presence: true, uniqueness: { case_sensitive: false, message: "Razão Social já cadastrada" }
  validates :email, presence: true, length: { maximum: 260 }
  validates :email, uniqueness: { case_sensitive: false }
  validates :state, presence: true
  validates :phone, presence: true, uniqueness: true
  validates :street, presence: true
  validates :number, presence: true
  validates :city, presence: true
  validates :pais, presence: true
  validates :neighborhood, presence: true
  validates :cnpj, presence: true, uniqueness: true
end
