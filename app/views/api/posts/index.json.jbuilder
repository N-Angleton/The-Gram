json.set! :users do
    if @user
        json.partial! 'api/users/user', user: @user
    end
    @posts.each do |post|
        post.comments.each do |comment|
            json.partial! 'api/users/user', user: comment.commenter
        end
    end
    @posts.each do |post|
        post.likes.each do |like|
            json.partial! 'api/users/user', user: like.liker
        end
    end
end


json.set! :posts do
    @posts.each do |post|
        json.partial! 'api/posts/post', post: post
    end
end


json.set! :comments do
    @posts.each do |post|
        json.partial! 'api/comments/comment', post: post
    end
end


json.set! :likes do
    @posts.each do |post|
        json.partial! 'api/likes/like', post: post
    end
end

json.followings({
    approved_followers: [],
    unapproved_followers: [],
    approved_follows: [],
    pending_follows: []
})