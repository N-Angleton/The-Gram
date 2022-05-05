class Api::PostsController < ApplicationController

    def index
        if params[:user_id]
            @user = User.includes(:approved_followers, :unapproved_followers, :pending_follows, :approved_follows, followed_posts: {comments: :commenter, likes: :liker}).find(params[:user_id])
        end
        if @user
            render '/api/posts/feed'
        else
            @user = current_user
            @posts = Post.includes(comments: :commenter, likes: :liker).all
            render 'api/posts/index'
        end
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            @posts = [@post]
            render '/api/posts/index'
        else
            render json: @post.errors.full_messages, status: 405
        end
    end

    def update
        @post = Post.find(params[:id])

        if @post.update
            @posts = [@post]
            render '/api/posts/index'
        else
            render json: @post.errors.full_messages, status: 405
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post
            @post.destroy
            render json: ['Post deleted']
        else
            render json: @post.errors.full_messages, status: 404
        end
    end

    def post_params
        params.require(:post).permit(:poster_id, :description, :photo)
    end

end