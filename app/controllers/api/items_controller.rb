class Api::ItemsController < ApplicationController
  def new
    @item = Item.new
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
    @item = Item.find(params[:id])
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:item][:id])
    if @item.update(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    @items = Item.all
    render :index
  end

  def search
    @items = []
    Item.all.each do |item|
      @items << item if item.description.downcase.include?(params[:search_id].downcase)
    end

    render :index
  end

  private

  def item_params
    params.require(:item).permit(
      :id,
      :seller_id,
      :description,
      :price,
      :sold,
      :query,
      photos: []
    )
  end
end
