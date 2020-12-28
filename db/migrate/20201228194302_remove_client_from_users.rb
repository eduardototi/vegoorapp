class RemoveClientFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_reference :users, :client, null: false, foreign_key: true
  end
end
