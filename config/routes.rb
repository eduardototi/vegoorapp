Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :clients

  resources :staffs

  resources :utensils

  resources :services

  resources :orders

  resources :sf6_orders

end
