json.extract! @item, :id, :seller_id, :description, :price, :sold, :user, :created_at

json.photos(@item.photos) do |photo|
  json.photoUrl url_for(photo)
end

if @item.user.profile_pic.attached?
  json.user_photo url_for(@item.user.profile_pic)
end