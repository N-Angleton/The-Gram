class CreateFollowRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :follow_requests do |t|
      t.references :follower, null: false
      t.references :user_to_be_followed, null: false
      t.boolean :approved
      t.timestamps
    end
    add_foreign_key :follow_requests, :users, column: :follower_id, on_delete: :cascade
    add_foreign_key :follow_requests, :users, column: :user_to_be_followed_id, on_delete: :cascade
  end
end
