class Post < ApplicationRecord

    validates :description, presence: true

    has_one_attched :photo

    belongs_to :poster,
        foreign_key: :poster_id,
        class_name: :User

end
