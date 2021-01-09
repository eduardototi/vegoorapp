class AddContactToSf6Order < ActiveRecord::Migration[6.0]
  def change
    add_reference :sf6_orders, :contact, null: false, foreign_key: {to_table: "users"}
  end
end
