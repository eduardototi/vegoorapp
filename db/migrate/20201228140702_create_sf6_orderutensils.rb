class CreateSf6Orderutensils < ActiveRecord::Migration[6.0]
  def change
    create_table :sf6_orderutensils do |t|
      t.references :sf6_order, null: false, foreign_key: true
      t.references :utensil, null: false, foreign_key: true

      t.timestamps
    end
  end
end
