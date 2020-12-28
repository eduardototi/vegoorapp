class RemoveUserFromClients < ActiveRecord::Migration[6.0]
  def change
    remove_reference :clients, :user, null: false, foreign_key: true
  end
end
