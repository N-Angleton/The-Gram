a_followers = []
u_followers = []
a_follows = []
p_follows = []

user.approved_follower_requests.each do |follow_request|
    key = follow_request.follower_id
    a_followers.push(Hash[key, follow_request.id])
end
user.unapproved_follower_requests.each do |follow_request|
    key = follow_request.follower_id
    u_followers.push(Hash[key, follow_request.id])
end
user.approved_follow_requests.each do |follow_request|
    key = follow_request.user_to_be_followed_id
    a_follows.push(Hash[key, follow_request.id])
end
user.pending_follow_requests.each do |follow_request|
    key = follow_request.user_to_be_followed_id
    p_follows.push(Hash[key, follow_request.id])
end

json.set! :followings do
    json.set! user.id do
        json.approved_followers a_followers
        json.unapproved_followers u_followers
        json.approved_follows a_follows
        json.pending_follows p_follows
    end
end