class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :seller_id, null: false
      t.string :img_url, null: false
      t.text :description, null: false, index: true
      t.float :price, null: false
      t.boolean :sold, null: false

      t.timestamps
    end
  end
end
