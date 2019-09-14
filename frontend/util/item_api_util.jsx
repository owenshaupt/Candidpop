export const fetchItems = () => {
  return $.ajax({
    url: '/api/items',
    error: (err) => console.log(err)
  });
};

export const fetchItem = (id) => {
  return $.ajax({
    url: `/api/items/${id}`,
    error: (err) => console.log(err)
  });
};

export const createItem = (item) => {
  return $.ajax({
    url: '/api/items',
    method: 'POST',
    data: item,
    contentType: false,
    processData: false,
    error: (err) => console.log(err)
  });
};

export const updateItem = (item) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/items/${item.id}`,
    data: { item },
    error: (err) => console.log(err)
  });
};

export const deleteItem = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/items/${id}`,
    error: (err) => console.log(err)
  });
};