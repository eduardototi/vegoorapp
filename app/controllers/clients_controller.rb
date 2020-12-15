class ClientsController < ApplicationController

  def index
    @clients = Client.all
  end

  def show
    @client = Client.find(params[:id])
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.new(client_params)
    @client.user = current_user
    @client.save
  end

  def edit
    @client = Client.find(params[:id])
  end

  def update
    @client = Client.find(params[:id])
    if @client.update(client_params)
      redirect_to client_path(@client)
    else
      render :edit
    end
  end

  def destroy
    @client = Client.find(params[:id])
    @client.destroy
    redirect_to clients_path
  end

  private

  def client_params
    params.require(:client).permit(:razao_social, :cnpj, :ie, :street, :email,
                                   :phone, :pais, :number, :neighborhood, :state,
                                   :city, :user_id, :cep)
  end
end
