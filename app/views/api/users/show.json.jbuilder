json.extract! @user, :id, :username, :first_name, :last_name, :location

json.items(@user.items_for_sale) do |item|
  json.extract! item, :id, :price, :sold

  json.photos(item.photos) do |photo|
    json.photoUrl url_for(photo)
  end
end