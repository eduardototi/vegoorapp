class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :edit, :destroy, :update]

  def index
    @clients = Client.all
  end

  def show
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.new(client_params)
    if @client.save
      redirect_to client_path(@client)
    end
  end

  def edit
  end

  def update
    if @client.update(client_params)
      redirect_to client_path(@client)
    else
      render :edit
    end
  end

  def destroy
    @client.destroy
    redirect_to clients_path
  end

  private

  def set_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:razao_social, :cnpj, :ie, :street, :email,
                                   :phone, :pais, :city, :unity, :number, :neighborhood, :state,
                                   :city, :user_id, :cep)
  end

end
