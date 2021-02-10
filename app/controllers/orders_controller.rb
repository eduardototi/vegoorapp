class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    #Seleciona o id e nome de todas as empresas existentes
    @empresas = Company.all.map { |empresa| [empresa.name, empresa.id] }
    #Dicionário para armazenar as ordens por id da empresa
    @orders = {}
    empresasSize = (@empresas.length - 1)

    #Cria uma chave usando o id de empresa e armazena como valor da chave
    #o resultado de uma query onde busca todas as ordens que possuem o mesmo company_id da chave,
    #que não estão canceladas e assim são ordenadas por data de criação crescente.
    #O resultado da query é percorrida e adicionada a um vetor onde cada elemento
    #é um dicionário que possui somente as informações que serão exibidas na listagem
    for i in 0..empresasSize do
      #Busca todas as ordens não canceladas da empresa i e ordena elas por data de criação crescente
      companyOrders = Order.where(canceled: false, company_id: @empresas[i][1]).order(created_at: :asc)
      companyOrdersSize = (companyOrders.length - 1)
      #Vetor para armazenar o dicionário contendo somente as informações a serem exibidas
      newOrders = []

      #Percorre o vetor de ordens filtradas
      for j in 0..companyOrdersSize do
        #Ordem somente com as informações a serem exibidas
        order = {"idAbsoluto": companyOrders[j].id,
                 "contagem": (j + 1),
                 "razao_social": companyOrders[j].client.razao_social,
                 "status": companyOrders[j].status}

        newOrders.push(order)
      end

      #Adiciona as ordens editadas ao dicionário
      @orders[@empresas[i][1]] = newOrders
    end

    #Adiciona uma chave com valor vazio para representar sem seleção de empresa
    @orders[""] = [];
  end

  def show
    prestadora = Company.where(id: @order.company_id).map {|prestadora| [prestadora.id, prestadora.name]}[0]
    @nomePrestadora = prestadora[1]
    @contagem = defineContagemOrdem(@order.id, prestadora[0])
    @orderservices = getOrderServices(params[:id])
    @epi_orders = getEpiOrders(params[:id])
    @servicos = []
    @epis = []

    maxServicos = (@orderservices.length() - 1)
    maxEpis = (@epi_orders.length() - 1)

    for i in 0..maxServicos do
      relatorios = OrderserviceReport.where(orderservice_id: @orderservices[i].id)

      servico = {"id": @orderservices[i].id,
                 "nome": @orderservices[i].service.title,
                 "equipamento": @orderservices[i].machine.name,
                 "serie": @orderservices[i].machineserie,
                 "status": @orderservices[i].status,
                 "dataAtualizacao": @orderservices[i].updated_at.strftime("%d/%m/%Y %k:%M"),
                 "relatorios": relatorios}
      @servicos.push(servico)
    end

    for i in 0..maxEpis do
      epi = {"nome": @epi_orders[i].epi.name,
             "quantia": @epi_orders[i].amount}
      @epis.push(epi)
    end
  end

  def new
    @servicos = getServicos()
    @maquinas = getMaquinas()
    @equipamentos = getEquipamentos()
    @epis = getEpis()
    @responsaveisTecnicos = getResponsaveisTecnicos()
    @clientes = getClientes()
    @contatoDosClientes = getContatoDosClientes()
    @empresas = getEmpresas()
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
    prestadora = Company.where(id: @order.company_id).map {|prestadora| [prestadora.id, prestadora.name]}[0]
    @nomePrestadora = prestadora[0]
    @contagem = defineContagemOrdem(@order.id, prestadora[0])
    @servicos = getServicos()
    @maquinas = getMaquinas()
    @equipamentos = getEquipamentos()
    @epis = getEpis()
    @responsaveisTecnicos = getResponsaveisTecnicos()
    @clientes = getClientes()
    @contatoDosClientes = getContatoDosClientes()
    @empresas = getEmpresas()

    @orderservices = getOrderServices(params[:id])
    @epi_orders = getEpiOrders(params[:id])
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
    @order.update(order_params)
  end

  def close_order
    @order = Order.find(params[:order_id])
    @orderservices = getOrderServices(params[:id])
    @epi_orders = getEpiOrders(params[:id])

    if @order.status
      @order.status = false
      open_services(@order)
      @order.save
      if @order.save
        redirect_to order_path(@order)
      end
    else
      @order.status = true
      close_services(@order)
      @order.save
      if @order.save
        redirect_to order_path(@order)
      end
    end
  end

  def cancel_order
    @order = Order.find(params[:order_id])
    @orderservices = getOrderServices(params[:id])
    @epi_orders = getEpiOrders(params[:id])
    @order.canceled = true

    if @order.save
      redirect_to orders_path
    end
  end

  def canceled
    @orders = Order.where(canceled: true)
  end

  private

  def getServicos
    servicos = Service.all.map { |servico| [servico.title, servico.id ] }
  end

  def getMaquinas
    equipamentos = Machine.all.map { |maquina| [maquina.name, maquina.id ] }
  end

  def getEpis
    maquinas = Utensil.all.map { |equipamento| [equipamento.name, equipamento.id ] }
  end

  def getEquipamentos
    epis = Epi.all.map { |epi| [epi.name, epi.id ] }
  end

  def getResponsaveisTecnicos
    responsaveisTecnicos = User.where(role: "Técnico").map {|user| [ "#{user.first_name} #{user.last_name}", user.id]}
  end

  def getClientes
    clientes = Client.all.map { |client| [client.razao_social, client.id ] }
  end

  def getContatoDosClientes
    contatoDosClientes = User.where(role: "Cliente").map { |user| ["#{user.first_name} #{user.last_name}", user.id ]}
  end

  def getEmpresas
    empresas = Company.all.map { |company| [company.name, company.id ] }
  end

  def getOrderServices(order_id)
    orderservices = Orderservice.where(order_id: order_id)
  end

  def getEpiOrders(order_id)
    epi_orders = EpiOrder.where(order_id: order_id)
  end

  #Esta função filtra quantas ordens existem de uma empresa, ordena elas crescentemente
  #pela data de criação e depois percorre uma a uma para definir qual seria a contagem
  #da ordem que esta sendo selecionado, é necessário fazer isso para ter "ids únicos"
  #para todas as empresas
  def defineContagemOrdem(id_ordem, id_empresa)
    #Seleciona as ordens de uma empresa e ordena elas crescentemente pela data de criação
    select = Order.where(company_id: id_empresa).order(created_at: :asc)
    contagem = 0

    #Laço para buscar qual seria a posição da ordem desejada na busca
    for i in 0..(select.length() - 1) do
      if select[i].id == id_ordem
        #i + 1 pois os vetores começam em índice zero
        contagem = (i + 1)
        break
      end
    end

    return contagem
  end

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
