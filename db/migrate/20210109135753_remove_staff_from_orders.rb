class RemoveStaffFromOrders < ActiveRecord::Migration[6.0]
  def change
    remove_reference :orders, :staff, null: false, foreign_key: true
  end
end
