class AddMachineToOrderservice < ActiveRecord::Migration[6.0]
  def change
    add_reference :orderservices, :machine, null: false, foreign_key: true
    add_column :orderservices, :machineserie, :string
  end
end
