class ServiceOrdersController < ApplicationController
  before_action :set_service_order, only: [:show, :edit, :destroy, :update]

  def index
    @service_orders = ServiceOrder.all
  end

  def show
  end

  def new
    @service_order = ServiceOrder.new
  end

  def create
    @service_order = ServiceOrder.new(service_order_params)
    if @service_order.save
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    @service_order.destroy
    redirect_to service_orders_path
  end

  def edit
  end

  def update
    if @service_order.update(service_order_params)
      redirect_to service_order_path(@service_order)
    else
      render :edit
    end
  end

  private

  def set_service_order
    @service_order = ServiceOrder.find(params[:id])
  end

  def service_params
    params.require(:service_order).permit(:title, :description)
  end

end
