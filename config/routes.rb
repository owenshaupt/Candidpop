Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :items do
      collection do
        get 'search'
        # URI pattern is: /api/items/:action/:query

        # An incoming path of /photos/show/1?user_id=2 will be dispatched to the
        # show action of the Photos controller. params will be
        # { :controller => “photos”, :action => “show”, :id => “1”, :user_id => “2” }.
      end
    end
    resources :follows, only: [:create, :destroy, :show, :index]
  end

  

  root to: 'static_pages#root'
end

# api/items/search

# match ':controller/:action/:id'