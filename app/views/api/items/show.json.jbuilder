json.extract! @item, :id, :seller_id, :description, :price, :sold, :user

json.thumb(@item.photos[0])


json.photos(@item.photos) do |photo|
  json.photoUrl url_for(photo)
end

# json.photos @item.photos.map { |photo| url_for(photo) }