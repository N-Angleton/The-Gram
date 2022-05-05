class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, default: "", null: false
      t.timestamps
    end
    add_reference :comments, :users, foreign_key: { on_delete: :cascade }
    add_reference :comments, :posts, foreign_key: { on_delete: :cascade }
  end
end
