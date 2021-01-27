class CreateOrderserviceReports < ActiveRecord::Migration[6.0]
  def change
    create_table :orderservice_reports do |t|
      t.string :parameter
      t.string :unity
      t.string :fase_a
      t.string :fase_b
      t.string :fase_c
      t.string :reference
      t.references :orderservice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
