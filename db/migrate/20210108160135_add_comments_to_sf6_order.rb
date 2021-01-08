class AddCommentsToSf6Order < ActiveRecord::Migration[6.0]
  def change
    add_column :sf6_orders, :comments, :text
  end
end
