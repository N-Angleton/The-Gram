class FollowRequest < ApplicationRecord

    validates :approved, inclusion: { in: [true, false] }

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :user_to_be_followed,
        foreign_key: :user_to_be_followed_id,
        class_name: :User

end