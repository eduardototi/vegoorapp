class RenameCountryColumnPaisToClients < ActiveRecord::Migration[6.0]
  def change
    rename_column :clients, :country, :pais
  end
end
