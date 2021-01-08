Rails.application.routes.draw do
  devise_for :users
  resources :users, except: :create
  post 'create_user' => 'users#create', as: :create_user

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :clients

  resources :staffs

  resources :utensils

  resources :services

  resources :orders

  resources :sf6_orders

  resources :machines

end
