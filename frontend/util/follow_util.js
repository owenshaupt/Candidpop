export const fetchFollow = follow => {
  return $.ajax({
    url: `/api/follows/${follow}`,
    method: "GET",
    data: follow,
    // error: err => console.log(err)
  })
}

export const createFollow = follow => {
  return $.ajax({
    url: "/api/follows",
    method: "POST",
    data: follow,
    // error: err => console.log(err)
  });
};

export const deleteFollow = follow => {
  return $.ajax({
    type: "DELETE",
    url: `/api/follows/${follow}`,
    data: follow,
    // error: err => console.log(err)
  });
};
