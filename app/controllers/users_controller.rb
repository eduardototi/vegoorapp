class UsersController < ApplicationController
  before_action :authorize_admin, only: [:new, :create]
  before_action :set_user, only: [:show, :edit, :destroy, :update]

  def index
    @users = User.all
  end

  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_path(@user)
    else
      render :new
    end
  end

  def edit
    @roles = [["Cliente", "Cliente"], ["Técnico", "Técnico"], ["Diretor", "Diretor"], ["Gerente", "Gerente"], ["Pesquisador", "Pesquisador"]]
    @clients = Client.all.map {|client| [client.razao_social, client.id] }
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    redirect_to users_path
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def authorize_admin
    current_user.admin?
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :admin, :email, :phone, :client_id, :role, :password, :password_confirmation)
  end

end
