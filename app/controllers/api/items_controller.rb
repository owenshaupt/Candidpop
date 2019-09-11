class Api::ItemsController < ApplicationController
  def new
    @item = Item.new
    render :new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def index
    @items = Item.all
    render :index
  end

  def show
  
  end

  def edit
  
  end

  def update
  
  end

  def delete
  
  end

  private

  def item_params
    params.require(:item).permit(
      :img_url,
      :description,
      :price
    )
  end
end
