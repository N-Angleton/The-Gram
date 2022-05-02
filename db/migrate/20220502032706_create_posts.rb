class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :poster_id, null: false
      t.text :description, default: "", null: false
      t.timestamps
    end
    add_index :posts, :poster_id
  end
end