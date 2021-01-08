class AddUnityToClient < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :unity, :string
  end
end
