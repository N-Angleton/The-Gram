json.set! user.id do
    json.extract! user, :id, :username, :email, :full_name, :photo_url
end