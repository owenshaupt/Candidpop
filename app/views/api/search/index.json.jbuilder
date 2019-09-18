@items.each do |item|
  json.set! item.id do
    json.partial! 'item', item: item
  end
end
