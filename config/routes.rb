Rails.application.routes.draw do
  
  # get 'pages/index'
  # post 'pages/create'

  namespace :api do
    resources :pages
  end
  
end
