# json.users({})
json.set! :users do
    json.partial! 'api/users/user', user: @user

    @user.posts.each do |post|
        post.comments.each do |comment|
            json.partial! 'api/users/user', user: comment.commenter
        end
    end
    @user.posts.each do |post|
        post.likes.each do |like|
            json.partial! 'api/users/user', user: like.liker
        end
    end
end

# json.posts({})
json.set! :posts do
    @user.posts.each do |post|
        json.partial! 'api/posts/post', post: post
    end
end

# json.comments({})
json.set! :comments do
    @user.posts.each do |post|
        json.partial! 'api/comments/comment', post: post
    end
end

# json.likes({})
json.set! :likes do
    @user.posts.each do |post|
        json.partial! 'api/likes/like', post: post
    end
end

json.partial! 'api/follow_requests/follow', user: @user