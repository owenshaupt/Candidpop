class ChangeFollowsIndex < ActiveRecord::Migration[5.2]
  def change
    change_table :follows do |t|
      t.index [:follower_id, :followee_id], unique: true
    end
  end
end
