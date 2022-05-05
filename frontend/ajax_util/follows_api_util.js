export const createFollowRequest = followRequest => (
    $.ajax({
        method: 'POST',
        url: '/api/follow_requests',
        data: {followRequest}
    })
)

export const updateFollowRequest = followRequest => (
    $.ajax({
        method: 'PATCH',
        url: `/api/follow_requests/${followRequest.id}`,
    })
)

export const deleteFollowRequest = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/follow_requests/${id}`,
    })
)