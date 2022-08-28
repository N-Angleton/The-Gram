class Api::FollowRequestsController < ApplicationController

    def create
        @follow = FollowRequest.new(follow_params)

        if @follow.save
            user = current_user
            if user.id == @follow.follower_id
                other_user_id = @follow.user_to_be_followed_id
            else
                other_user_id = @follow.follower_id
            end
              render json: {user_id: user.id, other_user_id: other_user_id, follow_id: @follow.id}
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    def update
        @follow = FollowRequest.find_by(params[:id])

        if @follow
            user = current_user
            if user.id == @follow.follower_id
                other_user_id = @follow.user_to_be_followed_id
            else
                other_user_id = @follow.follower_id
            end
        end

        if @follow.update({approved: true})
            render json: {user_id: user.id, other_user_id: other_user_id, follow_id: @follow.id}
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    def destroy
        @follow = FollowRequest.find(params[:id])

        if @follow
            user = current_user
            if user.id == @follow.follower_id
                other_user_id = @follow.user_to_be_followed_id
            else
                other_user_id = @follow.follower_id
            end
        end

        if @follow.destroy
            render json: {user_id: user.id, other_user_id: other_user_id, follow_id: @follow.id}
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    def follow_params
        params.require(:followRequest).permit(:follower_id, :user_to_be_followed_id, :approved)
    end

end
