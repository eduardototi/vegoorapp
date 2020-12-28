class CreateSf6Orderservices < ActiveRecord::Migration[6.0]
  def change
    create_table :sf6_orderservices do |t|
      t.references :sf6_order, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
