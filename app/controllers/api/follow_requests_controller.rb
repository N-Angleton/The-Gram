class Api::FollowRequestsController < ApplicationController

    def create
        @follow = FollowRequest.new(follow_params)

        if @follow.save
            @user = current_user
            render '/api/follow_requests/show'
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    def update
        @follow = FollowRequest.find(params[:id])

        if @follow.update({approved: true})
            render '/api/follow_requests/show'
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    def destroy
        @follow = FollowRequest.find(params[:id])
        if @follow.destroy
            render json: ['Deleted']
        else
            render json: @follow.errors.full_messages, status 404
        end
    end

    def follow_request_params
        params.require(:follow_request).permit(:follower_id, :user_to_be_followed_id, :approved)
    end

end
