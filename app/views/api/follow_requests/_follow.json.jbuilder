a_followers = []
u_followers = []
a_follows = []
p_follows = []

user.approved_followers.each do |follower|
    a_followers.push(follower.id)
end
user.unapproved_followers.each do |follower|
    u_followers.push(follower.id)
end
user.approved_follows.each do |follower|
    a_follows.push(follower.id)
end
user.pending_follows.each do |follower|
    p_follows.push(follower.id)
end

json.set! :followings do
    json.approved_followers a_followers
    json.unapproved_followers u_followers
    json.approved_follows a_follows
    json.pending_follows p_follows
end