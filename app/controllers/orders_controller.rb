class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    @orders = Order.all
  end

  def show
  end

  def new
    @order = Order.new
    @order.orderservices.build
  end

  def create
    @order = Order.new(order_params)
    @orderservice = Orderservice.new
    @order.user = current_user
    @orderservice.order_id = @order
    if @order.save && @orderservice.save
      redirect_to root_path
    else
      render :new
      raise
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
    params.require(:order).permit(:location, :description, :user_id, :status, :client_id, order_service_attributes: [:_destroy, :id, :service_title, :service_id, :order_id])
  end

end
