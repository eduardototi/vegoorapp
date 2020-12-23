class AddStatusToStaff < ActiveRecord::Migration[6.0]
  def change
    add_column :staffs, :status, :boolean
  end
end
