class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.timestamps
    end
    add_reference :likes, :users, foreign_key: { on_delete: :cascade }
    add_reference :likes, :posts, foreign_key: { on_delete: :cascade }
  end
end
