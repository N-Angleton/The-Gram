class Api::PostsController < ApplicationController

    def index
        if params[:user_id]
            @user = User.includes(:approved_follower_requests, :unapproved_follower_requests, :pending_follow_requests, :approved_follow_requests, posts: {comments: :commenter, likes: :liker}, followed_posts: {comments: :commenter, likes: :liker}).find(current_user.id)
        end
        if @user
            render '/api/posts/feed'
        else
            @user = User.includes(:approved_follower_requests, :unapproved_follower_requests, :pending_follow_requests, :approved_follow_requests).find(current_user.id)
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

        if @post.update({description: params[:post][:description]})
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