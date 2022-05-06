class RemoveUniqueConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, name: :index_comments_on_posts_id_and_users_id
    add_index :comments, [:posts_id, :users_id]
  end
end
