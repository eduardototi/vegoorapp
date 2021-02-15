class Order < ApplicationRecord
  belongs_to :user
  belongs_to :client
  belongs_to :company
  has_one :vegoor_report
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

  before_create :increase_order_number
  # after_create :send_confirmation
  # after_update :send_confirmation
  
  private

  def increase_order_number
    if self.company_id == 1
      if Order.last == nil 
        self.vegoor_order = 1
        self.sf6_order = 0
      else
        self.vegoor_order = Order.last.vegoor_order + 1
        self.sf6_order = Order.last.sf6_order  
      end  
    elsif self.company_id == 2
      if Order.last == nil 
        self.sf6_order = 1
        self.vegoor_order = 0
      else
        self.sf6_order = Order.last.sf6_order + 1
        self.vegoor_order = Order.last.vegoor_order
      end
    end
  end

  def send_confirmation
    OrderMailer.with(order: self).confirmation.deliver_now!
  end
  
end
