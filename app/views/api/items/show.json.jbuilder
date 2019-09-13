json.extract! @item, :id, :seller_id, :img_url, :description, :price, :sold
json.photoUrl url_for(@item.photo)