Rails.application.routes.draw do

  root "houses#index"
  get 'houses/:id', to: 'houses#show'
  resources :students, only: [:index, :show]

end
