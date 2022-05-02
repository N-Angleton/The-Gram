class Post < ApplicationRecord

    validates :description, presence: true

    belongs_to :poster,
        foreign_key: :poster_id,
        class_name: :User

end
