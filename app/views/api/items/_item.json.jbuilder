json.extract! item, :id, :seller_id, :description, :price, :sold

json.photos(item.photos) do |photo|
  json.photoUrl url_for(photo)
end
