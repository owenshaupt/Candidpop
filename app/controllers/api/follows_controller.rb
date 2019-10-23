class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save

    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def show
    @follow = Follow.find_by(follow_params)
    render :show
  end

  def destroy
    @follow = Follow.find_by(follow_params)
    @follow.destroy
  end
  
  private

  def follow_params
    params.permit(:follower_id, :followee_id)
  end
end
