User.destroy_all
Follow_request.destroy_all
Comment.destroy_all
Like.destroy_all
Post.destroy_all

demo_user = User.create({username: "Demo_User", full_name: "Thanks for visiting!", email: "Demo_User@mail.com", password: "Demo_Password"})
philosophers = User.create({username: "Philosophers", full_name: "My favorite philosophers", email: "philosophers@mail.com", password: "philosophers"})
films = User.create({username: "Films", full_name: "My favorite films", email: "films@mail.com", password: "films_password"})
idaho = User.create({username: "Idaho", full_name: "My home state", email: "idahome@mail.com", password: "idaho_password"})
etchify = User.create({username: "Etchify", full_name: "Another site of mine", email: "etchify@mail.com", password: "etchify"})
paintings = User.create({username: "Paintings", full_name: "My favorite paintings", email: "paintings@mail.com", password: "paintings"})

[0..35].sample(20).each do |el|
  if (el % 6) != (el / 6) do
    FollowRequest.create({follower_id: ((el % 6) + 1), user_to_be_followed_id: ((el / 6) + 1), approved: true})
  end
end

