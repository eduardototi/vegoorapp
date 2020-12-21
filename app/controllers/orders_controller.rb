class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    @orders = Order.all
  end

  def show
    @orderservice = Orderservice.where(order_id: params[:id])
  end

  def new
    @order = Order.new
  end

  def create
    @order = Order.new(order_params)
    @orderservice = Orderservice.new
    @orderequipment = Orderequipment.new
    @order.user = current_user
    if @order.save
      @orderservice.order_id = @order.id
      @orderservice.service_id = params[:order][:orderservice][:service_id].to_i
      @orderequipment.order_id = @order.id
      @orderequipment.equipment_id = params[:order][:orderequipment][:equipment_id].to_i
      @orderservice.save
      @orderequipment.save
      redirect_to orders_path
    else
      render :new
    end
  end

  def destroy
    @order.destroy
    redirect_to orders_path
  end

  def edit
  end

  def update
    if @order.update(order_params)
      redirect_to order_path(@order)
    else
      render :edit
    end
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:location, :description, :user_id, :status, :client_id, orderservices_attributes: [:_destroy, :service_id, :order_id], orderequipments_attributes: [:_destroy, :equipment_id, :order_id])
  end

end
