class AddColumnToOrderservice < ActiveRecord::Migration[6.0]
  def change
    add_column :orderservices, :status, :boolean, default: false
  end
end
