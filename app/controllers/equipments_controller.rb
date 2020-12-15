class EquipmentsController < ApplicationController

  before_action :set_equipment, only: [:show, :edit, :destroy, :update]

  def index
    @equipments = Equipment.all
  end

  def show
  end

  def new
    @equipment = Equipment.new
  end

  def create
    @equipment = Equipment.new(equipment_params)
    if @equipment.save
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    @equipment.destroy
    redirect_to equipments_path
  end

  def edit
  end

  def update
    if @equipment.update(equipment_params)
      redirect_to equipment_path(@equipment)
    else
      render :edit
    end
  end

  private

  def set_equipment
    @equipment = Equipment.find(params[:id])
  end

  def equipment_params
    params.require(:equipment).permit(:name)
  end

end
