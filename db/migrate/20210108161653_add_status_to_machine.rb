class AddStatusToMachine < ActiveRecord::Migration[6.0]
  def change
    add_column :machines, :status, :boolean, default: true
  end
end
