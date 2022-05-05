class AddUniqueConstraints < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:posts_id, :users_id], unique: true
    add_index :comments, [:posts_id, :users_id], unique: true
    add_index :follow_requests, [:follower_id, :user_to_be_followed_id], unique: true
  end
end
