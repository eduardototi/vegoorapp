class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    @orders = Order.all
  end

  def show
    @orderservice = Orderservice.where(params[id: :order_ir])
  end

  def new
    @order = Order.new
    @orderservice = Orderservice.new
    @orderutensil = Orderutensil.new
  end

  def create
    @order = Order.new(order_params)
    @order.user = current_user
    @order.status = false
    if @order.save
      redirect_to order_path(@order)
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
    params.require(:order).permit(:location, :description, :user_id, :status, :client_id, :staff_id, orderservices_attributes: [ :id, :service_id, :order_id, :status, :_destroy ], orderutensils_attributes: [ :id, :utensil_id, :order_id, :status, :_destroy ])
  end

end
