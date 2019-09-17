json.extract! @user, :id, :username, :first_name, :last_name, :email, :location

json.profile_pic url_for(@user.profile_pic)