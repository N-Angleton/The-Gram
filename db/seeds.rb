# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create([{username: "Demo_User"}, {full_name: "Demo_User"}, {email: "Demo_User@mail.com"}, {password: "Demo_Password"}])
other_user = User.create([{username: "other_user"}, {full_name: "other_user"}, {email: "other_user@mail.com"}, {password: "other_user"}])
another_user = User.create([{username: "another_user"}, {full_name: "another_user"}, {email: "another_user@mail.com"}, {password: "another_user"}])

FollowRequest.create([{follower_id: 1}, {user_to_be_followed_id: 2}, {approved: true}])

FollowRequest.create([{follower_id: 2}, {user_to_be_followed_id: 1}, {approved: true}])

FollowRequest.create([{follower_id: 3}, {user_to_be_followed_id: 2}, {approved: true}])

FollowRequest.create([{follower_id: 2}, {user_to_be_followed_id: 3}, {approved: true}])

FollowRequest.create([{follower_id: 3}, {user_to_be_followed_id: 1}, {approved: true}])

FollowRequest.create([{follower_id: 1}, {user_to_be_followed_id: 3}, {approved: true}])