class AddColumnToSf6Order < ActiveRecord::Migration[6.0]
  def change
    add_column :sf6_orders, :factory, :boolean, default: false
  end
end
