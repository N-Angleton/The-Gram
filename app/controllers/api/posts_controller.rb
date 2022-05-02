class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render '/api/posts/create'
        else
            render json: @post.errors.full_messages, status: 405
        end
    end

    def post_params
        params.require(:post).permit(:poster_id, :description)
    end

end