class CreateSf6Orders < ActiveRecord::Migration[6.0]
  def change
    create_table :sf6_orders do |t|
      t.string :service_location
      t.boolean :status
      t.string :description
      t.references :client, null: false, foreign_key: true
      t.references :staff, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
