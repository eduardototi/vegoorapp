class AddCaceledToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :canceled, :boolean, default: false
  end
end
