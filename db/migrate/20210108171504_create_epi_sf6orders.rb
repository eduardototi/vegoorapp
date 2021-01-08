class CreateEpiSf6orders < ActiveRecord::Migration[6.0]
  def change
    create_table :epi_sf6orders do |t|
      t.references :epi, null: false, foreign_key: true
      t.references :sf6_order, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
