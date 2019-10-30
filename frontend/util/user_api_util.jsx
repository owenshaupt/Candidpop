export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    // error: (err) => console.log(err)
  });
};