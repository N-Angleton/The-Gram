json.set! :comments do
    json.set! @comment.posts_id do
        json.set! @comment.id do          
            json.extract! @comment, :id, :body, :users_id, :posts_id
        end
    end
end