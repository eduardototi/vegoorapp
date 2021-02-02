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
    get 'close_order', to: 'orders#close_order' 
  end

  resources :vegoor_reports do 
    get 'close_report', to: 'vegoor_reports#close_report' 
  end
  
  resources :machines

  resources :epis

  resources :orderservice_reports

  resources :companies


end
