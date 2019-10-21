class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower, null: false, index: true
      t.integer :followee, null: false, index: true
      t.timestamps
    end
  end
end
