comments = post.comments

json.set! post.id do
    comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :users_id, :posts_id
        end
    end
end