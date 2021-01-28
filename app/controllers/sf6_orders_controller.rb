class Sf6OrdersController < ApplicationController

  before_action :set_sf6_order, only: [:show, :edit, :destroy, :update]

  def index
    @ordersSf6 = Sf6Order.all
    @orders = []
    max = (@ordersSf6.length() - 1)

    for i in 0..max do
      orderSf6 = {"id": @ordersSf6[i].id,
                     "razao_social": @ordersSf6[i].client.razao_social,
                     "status": @ordersSf6[i].status}
      @orders.push(orderSf6)
    end
  end

  def show
    @orderservices = Sf6Orderservice.where(sf6_order_id: params[:id])
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
    @sf6Order = Order.new(sf6_order_params)
    @sf6Order.status = false

    if @sf6Order.save
      redirect_to orders_path
    else
      render :new
    end
  end

  def destroy
    @sf6_order = Sf6Order.find(params[:id])
    @sf6_order.destroy
  end

  def edit
    @servicos = Service.all.map { |servico| [servico.title, servico.id ] };
    @maquinas = Machine.all.map { |maquina| [maquina.name, maquina.id ] };
    @equipamentos = Utensil.all.map { |equipamento| [equipamento.name, equipamento.id ] };
    @epis = Epi.all.map { |epi| [epi.name, epi.id ] };

    @responsaveisTecnicos = User.where(role: "Técnico").map {|user| [ "#{user.first_name} #{user.last_name}", user.id]}
    @clientes = Client.all.map { |client| [client.razao_social, client.id ] };
    @contatoDosClientes = User.where(role: "Cliente").map { |user| ["#{user.first_name} #{user.last_name}", user.id ]}

    @orderservices = Sf6Orderservice.where(sf6_order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
    @servicosOrder = []
    @episOrder = []

    maxServicos = (@orderservices.length() - 1)
    maxEpis = (@epi_orders.length() - 1)

    for i in 0..maxServicos do
      servico = {"id": @orderservices[i].service.id,
                 "nome": @orderservices[i].service.title,
                 "idMaquina": @orderservices[i].machine.id,
                 "maquina": @orderservices[i].machine.name,
                 "serie": @orderservices[i].machineserie,
                 "status": @orderservices[i].status}
      @servicosOrder.push(servico)
    end

    for i in 0..maxEpis do
      epi = {"id": @epi_orders[i].epi.id,
             "nome": @epi_orders[i].epi.name,
             "quantia": @epi_orders[i].amount}
      @episOrder.push(epi)
    end
  end

  def update
    @sf6_order.update(sf6_order_params)
  end

  private

  def set_sf6_order
    @order = Sf6Order.find(params[:id])
  end

  def sf6_order_params
    params.require(:order).permit(:location, :field, :laboratory, :comments, :contact_id, :description, :user_id, :status, :client_id, orderservices_attributes: [ :id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy ], orderutensils_attributes: [ :id, :utensil_id, :order_id, :status, :_destroy ], epi_orders_attributes: [ :id, :order_id, :epi_id, :amount, :_destroy ])
  end

end
