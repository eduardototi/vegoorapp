class CreateOrderservices < ActiveRecord::Migration[6.0]
  def change
    create_table :orderservices do |t|
      t.references :service, null: false, foreign_key: true
      t.references :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
