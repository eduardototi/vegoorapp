class AddStaffToOrder < ActiveRecord::Migration[6.0]
  def change
    add_reference :orders, :staff, null: false, foreign_key: true
  end
end
