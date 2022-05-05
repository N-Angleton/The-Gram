debugger

json.set! :users do
    json.partial! 'api/users/user', user: @user

    @user.followed_posts.each do |post|
        post.comments.each do |comment|
            json.partial! 'api/users/user', user: comment.commenter
        end
    end
    @user.followed_posts.each do |post|
        post.likes.each do |like|
            json.partial! 'api/users/user', user: like.liker
        end
    end
    @user.followed_posts.each do |post|
        json.partial! 'api/users/user', user: post.poster
    end
end


json.set! :posts do
    @user.followed_posts.each do |post|
        json.partial! 'api/posts/post', post: post
    end
end


json.set! :comments do
    @user.followed_posts.each do |post|
        json.partial! 'api/comments/comment', post: post
    end
end


json.set! :likes do
    @user.followed_posts.each do |post|
        json.partial! 'api/likes/like', post: post
    end
end

json.partial! 'api/follow_requests/follow', user: @user