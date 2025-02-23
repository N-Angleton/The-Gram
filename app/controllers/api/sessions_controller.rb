class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render '/api/session/create'
        else
            render json: ['Invalid credentials'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: ['Logged out']
        else
            render json: ['No one logged in'], status: 404
        end
    end

end