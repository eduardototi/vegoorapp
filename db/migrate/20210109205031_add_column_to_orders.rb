class AddColumnToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :field, :boolean, default: false
    add_column :orders, :laboratory, :boolean, default: false
  end
end
