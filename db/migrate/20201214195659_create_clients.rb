class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :razao_social
      t.string :cnpj
      t.string :ie
      t.string :email
      t.string :phone
      t.string :street
      t.string :number
      t.string :city
      t.string :state
      t.string :country
      t.string :neighborhood
      t.string :cep
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
