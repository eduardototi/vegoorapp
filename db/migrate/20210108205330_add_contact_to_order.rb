class AddContactToOrder < ActiveRecord::Migration[6.0]
  def change
    add_reference :orders, :contact, null: false, foreign_key: {to_table: "users"}
  end
end
