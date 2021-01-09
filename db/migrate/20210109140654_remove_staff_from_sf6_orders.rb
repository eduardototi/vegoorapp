class RemoveStaffFromSf6Orders < ActiveRecord::Migration[6.0]
  def change
    remove_reference :sf6_orders, :staff, null: false, foreign_key: true
  end
end
