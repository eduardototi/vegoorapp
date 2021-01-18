class AddColumnToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :factory, :boolean, default: false
  end
end
