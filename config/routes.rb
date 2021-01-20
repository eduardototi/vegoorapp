Rails.application.routes.draw do
  devise_for :users
  resources :users, except: :create
  post 'create_user' => 'users#create', as: :create_user

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :clients

  resources :utensils

  resources :services

  resources :orders do
    resources :vegoor_reports, only: [ :new ]
  end

  resources :sf6_orders do
    resources :sf6_reports, only: [ :new ]
  end

  resources :vegoor_reports

  resources :sf6_reports

  resources :machines

  resources :epis
  
end
