class CreateSf6Reports < ActiveRecord::Migration[6.0]
  def change
    create_table :sf6_reports do |t|
      t.text :goal
      t.text :reception_test
      t.boolean :warrant, default: false
      t.text :conclusion
      t.text :observations
      t.boolean :status, default: false
      t.references :sf6_order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
