class Api::FollowsController < ApplicationController
  def new
    @follow = Follow.new
    render :new
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @follows = Follow.all
    render :index
  end

  def show
    @follow = Follow.find(params[:id])
    render :show
  end
  
  private

  def follow_params
    params.require(:follow).permit(:follower, :followee)
  end
end
