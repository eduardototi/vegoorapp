class CreateUtensils < ActiveRecord::Migration[6.0]
  def change
    create_table :utensils do |t|
      t.string :name
      t.boolean :status

      t.timestamps
    end
  end
end
