export const signup = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });

export const deleteAccount = (id) =>
  $.ajax({
    method: "DELETE",
    url: `/api/users${id}`,
  });

export const updateAccount = (FormData) =>
  $.ajax({
    method: "PATCH",
    url: `/api/users/${FormData.get("user[id]")}`,
    data: FormData,
    contentType: false,
    processData: false,
  });

// primarily gets all posts for a given profile
export const fetchProfile = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
  });
