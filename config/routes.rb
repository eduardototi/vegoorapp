Rails.application.routes.draw do
  devise_for :users
  resources :users, except: :create

  root to: "pages#home"

  post "create_user" => "users#create", as: :create_user
  post "create_client" => "clients#create", as: :create_client
  post "create_utensil" => "utensils#create", as: :create_utensil
  post "create_machine" => "machines#create", as: :create_machine
  post "create_epi" => "epis#create", as: :create_epi
  post "create_service" => "services#create", as: :create_service
  post "create_vegoor_order" => "orders#create", as: :create_vegoor_order
  post "create_sf6_order" => "sf6_orders#create", as: :create_sf6_order

  put "update_client" => "clients#update", as: :update_client
  put "update_utensil" => "utensils#update", as: :update_utensil
  put "update_machine" => "machines#update", as: :update_machine
  put "update_epi" => "epis#update", as: :update_epi
  put "update_service" => "services#update", as: :update_service

  resources :clients

  resources :utensils

  resources :services

  resources :orders

  resources :sf6_orders

  resources :machines

  resources :epis
end
