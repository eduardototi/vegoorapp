class AddMachineToSf6Orderservice < ActiveRecord::Migration[6.0]
  def change
    add_reference :sf6_orderservices, :machine, null: false, foreign_key: true
    add_column :sf6_orderservices, :machineserie, :string
  end
end
