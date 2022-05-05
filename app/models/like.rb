class Like < ApplicationRecord

    belongs_to :post,
        foreign_key: :posts_id,
        class_name: :Post
        
    belongs_to :liker,
        foreign_key: :users_id,
        class_name: :User

end