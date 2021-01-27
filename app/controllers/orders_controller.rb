class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    @ordersVegoor = Order.all
    @ordersSf6= Order.all
    @orders = []
    maxVegoor = (@ordersVegoor.length() - 1)
    maxSf6 = (@ordersSf6.length() - 1)

    for i in 0..maxVegoor do
      orderVegoor = {"id": @ordersVegoor[i].id,
                     "empresa": "Vegoor",
                     "razao_social": @ordersVegoor[i].client.razao_social,
                     "status": @ordersVegoor[i].status}
      @orders.push(orderVegoor)
    end

    for i in 0..maxSf6 do
      orderSf6 = {"id": @ordersSf6[i].id,
                  "empresa": "SF6",
                  "razao_social": @ordersSf6[i].client.razao_social,
                  "status": @ordersSf6[i].status}
      @orders.push(orderSf6)
    end
  end

  def show
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
    @servicos = []
    @epis = []

    maxServicos = (@orderservices.length() - 1)
    maxEpis = (@epi_orders.length() - 1)

    for i in 0..maxServicos do
      servico = {"descricao": @orderservices[i].service.title,
                 "equipamento": @orderservices[i].machine.name,
                 "serie": @orderservices[i].machineserie,
                 "status": @orderservices[i].status,
                 "dataAtualizacao": @orderservices[i].updated_at.strftime("%d/%m/%Y %k:%M")}
      @servicos.push(servico)
    end

    for i in 0..maxEpis do
      epi = {"nome": @epi_orders[i].epi.name,
             "quantia": @epi_orders[i].amount}
      @epis.push(epi)
    end

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
