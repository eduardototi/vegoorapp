class StaffsController < ApplicationController
  before_action :set_staff, only: [:show, :edit, :destroy, :update]

  def index
    @staffs = Staff.all
  end

  def show
  end

  def new
    @staff = Staff.new
  end

  def create
    @staff = Staff.new(staff_params)
    @staff.user = current_user
    if @staff.save
      redirect_to staffs_path
    else
      render :new
    end
  end

  def destroy
    @staff.destroy
    redirect_to staffs_path
  end

  def edit
  end

  def update
    if @staff.update(staff_params)
      redirect_to staff_path(@staff)
    else
      render :edit
    end
  end

  private

  def set_staff
    @staff = Staff.find(params[:id])
  end

  def staff_params
    params.require(:staff).permit(:first_name, :last_name, :email, :phone, :user_id, :registration, :status)
  end

end
