class Follow < ApplicationRecord
  validates :follower, presence: true
  validates :followee, presence: true

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee,
    class_name: :User
end
