url = user.photo.attached? ? url_for(user.photo) : false

json.extract! user, :id, :username, :email, :full_name
json.photo_url url