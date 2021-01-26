Rails.application.routes.draw do
  devise_for :users
  resources :users, except: :create

  post "create_user" => "users#create", as: :create_user
  post "create_utensil" => "utensils#create", as: :create_utensil
  post "create_client" => "clients#create", as: :create_client

  root to: "pages#home"

  resources :clients

  resources :utensils

  resources :services

  resources :orders

  resources :sf6_orders

  resources :machines

  resources :epis
end
