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
    type: 'POST',
    url: `/api/items`,
    error: (err) => console.log(err)
  });
};

export const updateItem = (item) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/items/${item.id}`,
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