export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
)

export const deleteAccount = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/users${id}`,
    })
)

export const updateAccount = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: {user}
    })
)

// primarily gets all posts for a given profile
export const fetchProfile = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`,
    })
)