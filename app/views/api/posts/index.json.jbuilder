@posts.each do |post|
    json.set! post.id do
        json.description post.description
        json.poster_id post.poster_id
    end
end