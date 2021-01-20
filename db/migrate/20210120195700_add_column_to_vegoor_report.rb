class AddColumnToVegoorReport < ActiveRecord::Migration[6.0]
  def change
    add_column :vegoor_reports, :status, :boolean, default: false
  end
end
