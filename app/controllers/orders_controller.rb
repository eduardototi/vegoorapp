class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :update, :pdf]

  def index
    @orders = Order.where(canceled: false, company_id: 1)
  end

  def sf6_orders
    @orders = Order.where(canceled: false, company_id: 2)
  end

  def show
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
    respond_to do |format|
      format.html
      format.json
      format.pdf { render pdf: "orders/show", pdf: 'Show' } 
    end
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

  def close_order
    @order = Order.find(params[:order_id])
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
    if @order.status
      @order.status = false
      open_services(@order)
      if @order.save
        redirect_to order_path(@order)
      end
    else
      @order.status = true
      close_services(@order)
      if @order.save
        redirect_to order_path(@order)
      end
    end
  end

  def cancel_order
    @order = Order.find(params[:order_id])
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
    @order.canceled = true
    if @order.save
      redirect_to canceled_orders_path
    end
  end

  def canceled
    @orders = Order.where(canceled: true)
  end

  private

  def close_services(order)
    order.orderservices.each do |service|
      service.status = true unless service.status
    end
  end

  def open_services(order)
    order.orderservices.each do |service|
      service.status = false
    end
  end

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:location, :comments, :field, :laboratory, :canceled, :factory, :company_id, :vegoor_order, :sf6_order, :contact_id, :description, :user_id, :status, :client_id,
                                  orderservices_attributes: [:id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy],
                                  orderutensils_attributes: [:id, :utensil_id, :order_id, :status, :_destroy],
                                  epi_orders_attributes: [ :id, :order_id, :epi_id, :amount, :_destroy])
  end

end
