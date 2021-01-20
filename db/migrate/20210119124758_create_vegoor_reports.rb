class CreateVegoorReports < ActiveRecord::Migration[6.0]
  def change
    create_table :vegoor_reports do |t|
      t.text :goal
      t.text :reception_test
      t.boolean :warrant, default: false
      t.text :conclusion
      t.text :observations

      t.timestamps
    end
  end
end
