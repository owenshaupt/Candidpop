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
    @item = Item.find(params[:id])
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

  private


  # in form:
  # make const formDate = new FormData();
  # formData.append('post[title]', this.state.title);
  # formData.append('post[photo]', this.state.photoFile);
  # 
  # trigger ajax request to create the item
  # 
  # I think I want to use the .files array and index as needed so I can have mulitple images per item

  def item_params
    params.require(:item).permit(
      :seller_id,
      :img_url,
      :description,
      :price,
      # :photo,
      :sold
    )
  end
end
