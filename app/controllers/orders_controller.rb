class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    @orders = Order.all
  end

  def show
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
  end

  def new
    @order = Order.new
    @orderservice = Orderservice.new
    @orderutensil = Orderutensil.new
    @epi_order = EpiOrder.new
  end

  def create
    @order = Order.new(order_params)
    @order.status = false
    if @order.save
      redirect_to order_path(@order)
    else
      render :new
    end
  end

  def destroy
    @order.destroy
    redirect_to orders_path
  end

  def edit
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_order = EpiOrder.where(order_id: params[:id])
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
    params.require(:order).permit(:location, :comments, :field, :laboratory, :factory, :contact_id, :description, :user_id, :status, :client_id,
                                  orderservices_attributes: [:id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy],
                                  orderutensils_attributes: [:id, :utensil_id, :order_id, :status, :_destroy],
                                  epi_orders_attributes: [ :id, :order_id, :epi_id, :amount, :_destroy])
  end

end
