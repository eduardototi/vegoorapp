class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :invitable, :database_authenticatable,
         :recoverable, :rememberable, :validatable, invite_for: 1.day
  has_many :orders
  belongs_to :client

  validates :role, inclusion: { in: ['Cliente', 'Técnico', 'Diretor', 'Gerente', 'Pesquisador'] }
  validates :phone, format: { with: /\(\d{2}\)\d{4,5}-\d{4}/,
                              message: "Somente no formato (XX)XXXXX-XXXX"
                            }

  validates :email, presence: true
  validates :email, uniqueness: { case_sensitive: false, message: 'somente letras minusculas' }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :role, presence: true

end
