class Comment < ApplicationRecord

    validates :body, presence: true

    belongs_to :post,
        foreign_key: :posts_id,
        class_name: :Post
        
    belongs_to :commenter,
        foreign_key: :users_id,
        class_name: :User

end