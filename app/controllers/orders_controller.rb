class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :destroy, :update]

  def index
    #Seleciona todas as empresas existentes
    empresas = Company.all
    #Dicionário para armazenar as ordens por id da empresa
    @orders = {}
    empresasSize = (empresas.length - 1)

    #Cria uma chave usando o id de empresa e armazena como valor da chave
    #o resultado de uma query onde busca todas as ordens que possuem o mesmo company_id da chave,
    #que não estão canceladas e assim são ordenadas por data de criação crescente.
    #O resultado da query é percorrida e adicionada a um vetor onde cada elemento
    #é um dicionário que possui somente as informações que serão exibidas na listagem
    for i in 0..empresasSize do
      #Busca todas as ordens não canceladas da empresa i e ordena elas por data de criação crescente
      companyOrders = Order.where(canceled: false, company_id: empresas[i].id).order(created_at: :asc)
      companyOrdersSize = (companyOrders.length - 1)
      #Vetor para armazenar o dicionário contendo somente as informações a serem exibidas
      newOrders = []

      #Percorre o vetor de ordens filtradas
      for j in 0..companyOrdersSize do
        #Ordem somente com as informações a serem exibidas
        order = {"id": companyOrders[j].id,
                 "prestadora": empresas[i].name,
                 "razao_social": companyOrders[j].client.razao_social,
                 "status": companyOrders[j].status}

        newOrders.push(order)
      end

      #Adiciona as ordens editadas ao dicionário
      @orders[empresas[i].id] = newOrders
    end

    #Adiciona uma chave com valor vazio para representar sem seleção de empresa
    @orders[""] = [];
  end

  def sf6_orders
    @orders = Order.where(canceled: false, company_id: 2)
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
    @empresas = Company.all.map { |company| [company.name, company.id ] };

    #@order = Order.new
    #@orderservice = Orderservice.new
    #@orderutensil = Orderutensil.new
    #@epi_order = EpiOrder.new
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

  def close_order
    @order = Order.find(params[:order_id])
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])

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
    @orderservices = Orderservice.where(order_id: params[:id])
    @epi_orders = EpiOrder.where(order_id: params[:id])
    @order.canceled = true

    if @order.save
      redirect_to orders_path
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
