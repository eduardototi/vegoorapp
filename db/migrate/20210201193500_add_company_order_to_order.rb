class AddCompanyOrderToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :vegoor_order, :integer, default: 0
    add_column :orders, :sf6_order, :integer, default: 0
  end
end
