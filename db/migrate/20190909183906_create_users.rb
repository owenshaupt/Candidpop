class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true, index: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :location, null: false
      t.string :img_url
      t.text :bio
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true, index: true
      t.timestamps
    end
  end
end
