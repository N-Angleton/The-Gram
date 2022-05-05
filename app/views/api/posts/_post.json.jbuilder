json.set! post.id do
    json.id post.id
    json.description post.description
    json.poster_id post.poster_id
    json.photoUrl url_for(post.photo)    
end