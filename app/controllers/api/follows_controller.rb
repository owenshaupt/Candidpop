class Api::FollowsController < ApplicationController
  def new
    @follow = Follow.new
    render :new
  end

  def create
    debugger

    @follow = Follow.new(follow_params)
    if @follow.save

    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  # def destroy
  #   @follow = Follow.find_by(follow_params)
  #   @follow.destroy
  # end
  
  private

  def follow_params
    params.permit(:follower_id, :followee_id)
  end
end
