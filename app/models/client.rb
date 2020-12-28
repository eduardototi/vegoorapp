STATES = ["AC", "AL", "AP", "AM", "BA", "CE", "DF",
          "ES", "GO", "MA", "MT", "MS", "MG", "PA",
          "PB", "PR", "PE", "PI", "RJ", "RN", "RS",
          "RO", "RR", "SC", "SP", "SE", "TO"]

class Client < ApplicationRecord
  has_many :users
  has_many :service_orders
  # validates :cep, presence: true, format: { with: /\A[0-9]{5}-[0-9]{3}\z/, message: "CEP em formato invalido" }
  # validates :razao_social, presence: true, uniqueness: { case_sensitive: false, message: "Razão Social já cadastrada" }
  # VALID_EMAIL_FORMAT = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  # validates :email, presence: true, length: { maximum: 260 }
  # validates :email, format: { with: VALID_EMAIL_FORMAT }
  # validates :email, uniqueness: { case_sensitive: false }
  # validates :state, presence: true
  # validates :phone, presence: true, uniqueness: true
  # validates :street, presence: true
  # validates :number, presence: true
  # validates :city, presence: true
  # validates :pais, presence: true
  # validates :neighborhood, presence: true
  # validates :cnpj, presence: true, uniqueness: true
end
