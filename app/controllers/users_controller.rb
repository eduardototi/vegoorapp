class UsersController < ApplicationController
  before_action :authorize_admin, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else
      raise
      render :new
    end
  end

  private

  def authorize_admin
    current_user.admin?
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :client_id, :role, :password, :password_confirmation)
  end

end
