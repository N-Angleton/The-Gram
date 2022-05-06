export const fetchAllPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
)

export const fetchUsersFeed = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}/posts`
    })
)

export const createPost = FormData => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: FormData,
        contentType: false,
        processData: false
    })
)

export const updatePost = post => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: {post}
    })
)

export const deletePost = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${id}`,
    })
)