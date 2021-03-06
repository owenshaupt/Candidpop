# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, presence: true
  validates :followee_id, presence: true
  validate :not_self_follow

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :User
  
  private

  def not_self_follow
    errors.add :Cannot, "follow yourself" if (follower_id == followee_id)
  end
end
