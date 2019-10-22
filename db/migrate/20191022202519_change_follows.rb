class ChangeFollows < ActiveRecord::Migration[5.2]
  def change
    change_table :follows do |t|
      t.rename :follower, :follower_id
      t.rename :followee, :followee_id
    end
  end
end
