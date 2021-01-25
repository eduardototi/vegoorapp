class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :invitable, :database_authenticatable,
         :recoverable, :rememberable, :validatable, invite_for: 1.day
  has_many :sf6_orders
  has_many :orders
  belongs_to :client

  validates :role, inclusion: { in: ['Cliente', 'Técnico', 'Diretor', 'Gerente', 'Pesquisador'] }
  validates :phone, format: { with: /\(\d{2}\)\d{4,5}-\d{4}/,
                              message: "only accepts format (XX)XXXXX-XXXX"
                            }
end
