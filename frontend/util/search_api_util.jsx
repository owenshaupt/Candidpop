export const searchItems = (search_id) => {
  return $.ajax({
    url: `/api/items/search?search_id=${search_id}`,
    error: (err) => console.log(err)
  });
};