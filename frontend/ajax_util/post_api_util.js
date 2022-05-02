export const fetchAllPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
)

export const createPost = post => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: {post}
    })
)