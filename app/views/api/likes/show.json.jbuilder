json.set! :likes do
    json.set! @like.posts_id do
        json.set! @like.id do          
            json.extract! @like, :id, :users_id, :posts_id
        end
    end
end