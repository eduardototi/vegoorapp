class ServicesController < ApplicationController
  before_action :set_service, only: [:show, :edit, :destroy, :update]

  def index
    @services = Service.all
  end

  def show
  end

  def new
    @service = Service.new
  end

  def create
    @service = Service.new(service_params)

    if @service.save
      redirect_to services_path
    else
      render :new
    end
  end

  def destroy
    @service = Service.find(params[:id])
    @service.destroy
  end

  def edit
  end

  def update
    @service.update(service_params)

    #if @service.update(service_params)
    #  redirect_to service_path(@service)
    #else
    #  render :edit
    #end
  end

  private

  def set_service
    @service = Service.find(params[:id])
  end

  def service_params
    params.require(:service).permit(:title, :description)
  end

end
