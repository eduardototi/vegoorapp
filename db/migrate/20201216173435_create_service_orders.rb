class CreateServiceOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :service_orders do |t|
      t.text :service_description
      t.boolean :status
      t.string :service_location
      t.references :user, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
