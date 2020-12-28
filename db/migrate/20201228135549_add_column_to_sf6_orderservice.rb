class AddColumnToSf6Orderservice < ActiveRecord::Migration[6.0]
  def change
    add_column :sf6_orderservices, :status, :boolean, default: false
  end
end
