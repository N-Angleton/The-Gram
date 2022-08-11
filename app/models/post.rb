class Post < ApplicationRecord

    # validates :description, presence: true

    validate :ensure_photo

    has_one_attached :photo

    belongs_to :poster,
        foreign_key: :poster_id,
        class_name: :User

    has_many :comments,
        foreign_key: :posts_id,
        class_name: :Comment

    has_many :likes,
        foreign_key: :posts_id,
        class_name: :Like

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << 'must be attached'
        end
    end

end
