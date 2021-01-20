Rails.application.routes.draw do
  devise_for :users
  resources :users, except: :create

  post 'create_user' => 'users#create', as: :create_user

  root to: "pages#home"

  resources :clients

  resources :utensils

  resources :services

  resources :orders

  resources :sf6_orders

  resources :machines

  resources :epis
end
