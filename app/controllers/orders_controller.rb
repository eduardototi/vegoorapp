class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    @orders = Order.all
    @ordersEditado = []
    max = (@orders.length() - 1)

    for i in 0..max do
      order = {"id": @orders[i].id,
               "razao_social": @orders[i].client.razao_social,
               "status": @orders[i].status}
      @ordersEditado.push(order)
    end
  end

  def show
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
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
    @order = Order.new(order_params)
    @order.status = false

    if @order.save
      redirect_to orders_path
    else
      render :new
    end
  end

  def destroy
    @order = Order.find(params[:id])
    @order.destroy
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
    params.require(:order).permit(:location, :comments, :field, :laboratory, :contact_id, :description, :user_id, :status, :client_id,
                                  orderservices_attributes: [:id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy],
                                  orderutensils_attributes: [:id, :utensil_id, :order_id, :status, :_destroy],
                                  epi_orders_attributes: [ :id, :order_id, :epi_id, :amount, :_destroy])
  end

end
