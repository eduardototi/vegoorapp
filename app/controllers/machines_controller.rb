class MachinesController < ApplicationController
  before_action :set_machines, only: [:show, :edit, :destroy, :update]

  def index
    @machines = Machine.all
  end

  def show
  end

  def new
    @machine = Machine.new
  end

  def create
    @machine = Machine.new(machine_params)
    if @machine.save
      redirect_to machines_path
    else
      render :new
    end
  end

  def destroy
    @machine.destroy
    redirect_to machines_path
  end

  def edit
  end

  def update
    if @machine.update(machine_params)
      redirect_to machine_path(@machine)
    else
      render :edit
    end
  end

  private

  def set_machines
    @machine = Machine.find(params[:id])
  end

  def machine_params
    params.require(:machine).permit(:name, :description, :status)
  end
end
