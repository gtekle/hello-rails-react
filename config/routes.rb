# frozen_string_literal: true

Rails.application.routes.draw do
  get 'static/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'greetings', to: 'greetings#index'
    end
  end

  # Forward all requests to StaticController#index but request
  # must be non-Ajax(!req.xhr?) and HTML Mime type (req.format.html?).
  # This doesn't include the root ("/") path.
  get '*page', to: 'static#index', constaints: lambda { |req|
    !req.xhr? && req.format.html?
  }
  # Defines the root path route ("/")
  root 'static#index'
end
