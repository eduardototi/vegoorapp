# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Iniciando Seed"

1.times do
  client = Client.create(
    razao_social: 'Vegoor Ltda',
    cnpj: '00.000.000/0001-00',
    ie: '154875-3',
    email: 'vegoor@email.com',
    phone: '(41)33333-2548',
    street: 'Rua Salgado Filho',
    number: '1840',
    city: 'Curitiba',
    state: 'PR',
    pais: 'Brasil',
    neighborhood: 'Centro',
    cep: '90320-070',
    unity: 'Matriz'
    )
  client.save!
end

1.times do
  user = User.create(
    first_name: 'Eduardo',
    last_name: 'Toti',
    email: 'eduardo@email.com',
    admin: true,
    role: 'Técnico',
    client_id: 1,
    phone: '(41)99582-0154',
    registration: '123456',
    password: "123456",
    password_confirmation: "123456",
    )
  user.save!
end

puts 'Seed finalizado com sucesso'
