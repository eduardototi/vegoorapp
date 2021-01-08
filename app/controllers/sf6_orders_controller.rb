class Sf6OrdersController < ApplicationController

  before_action :set_sf6_order, only: [:show, :edit, :destroy, :update]

  def index
    @sf6_orders = Sf6Order.all
  end

  def show
    @sf6_orderservices = Sf6Orderservice.where(sf6_order_id: params[:id])
  end

  def new
    @sf6_order = Sf6Order.new
    @sf6_orderservice = Sf6Orderservice.new
    @sf6orderutensil = Orderutensil.new
  end

  def create
    @sf6_order = Sf6Order.new(sf6_order_params)
    @sf6_order.user = current_user
    @sf6_order.status = false
    if @sf6_order.save
      redirect_to sf6_order_path(@sf6_order)
    else
      render :new
    end
  end

  def destroy
    @sf6_order.destroy
    redirect_to sf6_orders_path
  end

  def edit
    @sf6_orderservices = Sf6Orderservice.where(sf6_order_id: params[:id])
  end

  def update
    if @sf6_order.update(sf6_order_params)
      redirect_to sf6_order_path(@sf6_order)
    else
      render :edit
    end
  end

  private

  def set_sf6_order
    @sf6_order = Sf6Order.find(params[:id])
  end

  def sf6_order_params
    params.require(:sf6_order).permit(:service_location, :description, :user_id, :status, :client_id, :staff_id, sf6_orderservices_attributes: [ :id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy ], sf6_orderutensils_attributes: [ :id, :utensil_id, :order_id, :status, :_destroy ])
  end

end
