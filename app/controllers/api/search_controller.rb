class Api::SearchController < ApplicationController
  def index
    @items = []
    
    Item.all.each do |item|
      @items << item if item.description.include?(params[:query])
    end

    render :index
  end
end

