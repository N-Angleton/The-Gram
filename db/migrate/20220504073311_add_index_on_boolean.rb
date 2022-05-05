class AddIndexOnBoolean < ActiveRecord::Migration[5.2]
  def change
    add_index :follow_requests, [:follower_id, :approved]
    add_index :follow_requests, [:user_to_be_followed_id, :approved]
  end
end
