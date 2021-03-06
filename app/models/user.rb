# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  location        :string           not null
#  bio             :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token
  
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :location, presence: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  has_many :items_for_sale,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :Item

  has_many :follows_as_follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :follows_as_followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow
  
  has_many :followers,
    through: :follows_as_followee,
    source: :follower
  
  has_many :followed_accounts,
    through: :follows_as_follower,
    source: :followee

  has_one_attached :profile_pic
end
