class AddColumnToOrderequipment < ActiveRecord::Migration[6.0]
  def change
    add_column :orderequipments, :status, :boolean, default: false
  end
end
