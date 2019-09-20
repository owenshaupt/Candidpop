class Item < ApplicationRecord
  validates :seller_id, presence: true
  # validate :image_presence
  validates :description, presence: true
  validates :price, presence: true
  validates :sold, inclusion: { in: [true, false] }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User

  has_many_attached :photos

  private

  def image_presence
    errors.add :Must, 'upload at least 1 photo' if !photos.attached?
  end
end
