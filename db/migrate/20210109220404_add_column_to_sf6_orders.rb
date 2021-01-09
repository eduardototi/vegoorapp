class AddColumnToSf6Orders < ActiveRecord::Migration[6.0]
  def change
    add_column :sf6_orders, :field, :boolean, default: false
    add_column :sf6_orders, :laboratory, :boolean, default: false
  end
end
