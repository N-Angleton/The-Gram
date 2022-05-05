class User < ApplicationRecord

    after_initialize :ensure_session_token

    attr_reader :password

    validates :username, :full_name, :password_digest, :session_token, presence: true
    validates :username, :full_name, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_many :posts,
        foreign_key: :poster_id,
        class_name: :Post

    has_many :comments,
        foreign_key: :users_id,
        class_name: :Comment
    
    has_many :likes,
        foreign_key: :users_id,
        class_name: :Like

    has_many :approved_follower_requests,
    ->{(where(approved: true))},
    foreign_key: :user_to_be_followed_id,
    class_name: :FollowRequest

    has_many :unapproved_follower_requests,
    ->{(where(approved: false))},
    foreign_key: :user_to_be_followed_id,
    class_name: :FollowRequest

    has_many :pending_follow_requests,
    ->{(where(approved: false))},
    foreign_key: :follower_id,
    class_name: :FollowRequest

    has_many :approved_follow_requests,
    ->{(where(approved: true))},
    foreign_key: :follower_id,
    class_name: :FollowRequest


    

    has_many :approved_followers,
    through: :approved_follower_requests,
    source: :follower

    has_many :unapproved_followers,
    through: :unapproved_follower_requests,
    source: :follower

    has_many :pending_follows,
    through: :pending_follow_requests,
    source: :user_to_be_followed

    has_many :approved_follows,
    through: :approved_follow_requests,
    source: :user_to_be_followed



    has_many :followed_posts,
    through: :approved_follows,
    source: :posts


    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)

        if @user && @user.is_password?(password)
            return @user
        end
        nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

end