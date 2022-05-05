json.set! post.id do 
    post.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :users_id, :posts_id
        end
    end
end