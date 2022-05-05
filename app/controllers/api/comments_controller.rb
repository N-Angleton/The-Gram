class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render '/api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def update
        @comment = Comment.find(params[:id])
        
        if @comment.update(comment_params)
            render '/api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render json: ['Deleted']
        else
            render json: @comment.errors.full_messages, status 404
        end
    end

    def comment_params
        params.require(:comment).permit(:users_id, :posts_id, :body)
    end

end
