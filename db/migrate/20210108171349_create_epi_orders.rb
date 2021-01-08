class CreateEpiOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :epi_orders do |t|
      t.references :epi, null: false, foreign_key: true
      t.references :order, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
