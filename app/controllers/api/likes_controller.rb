class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)

        if @like.save
            render '/api/likes/show'
        else
            render json: @like.errors.full_messages, status: 405
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like.destroy
            render json: ['Deleted']
        else
            render json: @like.errors.full_messages, status 404
        end
    end

    def like_params
        params.require(:like).permit(:users_id, :posts_id)
    end

end
