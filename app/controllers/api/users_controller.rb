class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render '/api/session/create'
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render '/api/session/create'
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    # this is all of a given users info, including their posts
    def show
        @user = User.includes(:approved_followers, :unapproved_followers, :pending_follows, :approved_follows, posts: {comments: :commenter, likes: :liker}).find(params[:id])
        render '/api/users/show'
    end

    def destroy
        @user = current_user
        logout(@user)
        @user.destroy
        render json: ['User deleted']
    end

    def user_params
        params.require(:user).permit(:username, :password, :full_name, :email)
    end

end