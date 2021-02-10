Rails.application.routes.draw do
  devise_for :users
  resources :users, except: :create

  root to: "pages#home"

  get "canceled_orders", to: "orders#canceled"
  get "sf6_orders", to: "orders#sf6_orders"
  get "sf6_reports", to: "vegoor_reports#sf6_reports"

  post "create_user" => "users#create", as: :create_user
  post "create_client" => "clients#create", as: :create_client
  post "create_company" => "companies#create", as: :create_company
  post "create_utensil" => "utensils#create", as: :create_utensil
  post "create_machine" => "machines#create", as: :create_machine
  post "create_epi" => "epis#create", as: :create_epi
  post "create_service" => "services#create", as: :create_service
  post "create_order" => "orders#create", as: :create_order
  post "create_order_report" => "orderservice_reports#create", as: :create_order_report

  put "update_client" => "clients#update", as: :update_client
  put "update_company" => "companies#update", as: :update_company
  put "update_utensil" => "utensils#update", as: :update_utensil
  put "update_machine" => "machines#update", as: :update_machine
  put "update_epi" => "epis#update", as: :update_epi
  put "update_service" => "services#update", as: :update_service
  put "update_order_service" => "orderservice_reports#update", as: :update_order_service

  resources :clients
  resources :utensils
  resources :services
  resources :orders
  resources :machines
  resources :epis
  resources :machines
  resources :orderservice_reports
  resources :companies
end
