# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'greetings', to: 'greetings#index'
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
