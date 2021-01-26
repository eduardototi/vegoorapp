class Sf6OrdersController < ApplicationController

  before_action :set_sf6_order, only: [:show, :edit, :destroy, :update]

  def index
    @sf6Orders = Sf6Order.all
    @sf6OrdersEditado = []
    max = (@sf6Orders.length() - 1)

    for i in 0..max do
      order = {"id": @sf6Orders[i].id,
               "razao_social": @sf6Orders[i].client.razao_social,
               "status": @sf6Orders[i].status}
      @sf6OrdersEditado.push(order)
  end

  def show
    @sf6_orderservices = Sf6Orderservice.where(sf6_order_id: params[:id])
    @epi_sf6orders = EpiSf6order.where(sf6_order_id: params[:id])
  end

  def new
    @servicos = Service.all.map { |servico| [servico.title, servico.id ] };
    @maquinas = Machine.all.map { |maquina| [maquina.name, maquina.id ] };
    @equipamentos = Utensil.all.map { |equipamento| [equipamento.name, equipamento.id ] };
    @epis = Epi.all.map { |epi| [epi.name, epi.id ] };

    @responsaveisTecnicos = User.where(role: "Técnico").map {|user| [ "#{user.first_name} #{user.last_name}", user.id]}
    @clientes = Client.all.map { |client| [client.razao_social, client.id ] };
    @contatoDosClientes = User.where(role: "Cliente").map { |user| ["#{user.first_name} #{user.last_name}", user.id ]}
  end

  def create
    @sf6Order = Order.new(sf6_order_params)
    @sf6Order.status = false

    if @sf6Order.save
      redirect_to sf6_orders_path
    else
      render :new
    end
  end

  def destroy
    @sf6_order = Sf6Order.find(params[:id])
    @sf6_order.destroy
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
    params.require(:sf6_order).permit(:service_location, :field, :laboratory, :comments, :contact_id, :description, :user_id, :status, :client_id, sf6_orderservices_attributes: [ :id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy ], sf6_orderutensils_attributes: [ :id, :utensil_id, :order_id, :status, :_destroy ], epi_sf6orders_attributes: [ :id, :order_id, :epi_id, :amount, :_destroy ])
  end

end
