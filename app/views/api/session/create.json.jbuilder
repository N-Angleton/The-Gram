json.set! :users do
    json.partial! 'api/users/user', user: @user
end

json.session @user.id