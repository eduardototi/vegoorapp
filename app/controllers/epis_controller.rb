class EpisController < ApplicationController
  before_action :set_epis, only: [:show, :edit, :destroy, :update]

  def index
    @epis = Epi.all
  end

  def show
  end

  def new
    @epi = Epi.new
  end

  def create
    @epi = Epi.new(epi_params)
    if @epi.save
      redirect_to epis_path
    else
      render :new
    end
  end

  def destroy
    @epi.destroy
    redirect_to epis_path
  end

  def edit
  end

  def update
    if @epi.update(epi_params)
      redirect_to epi_path(@epi)
    else
      render :edit
    end
  end

  private

  def set_epis
    @epi = Epi.find(params[:id])
  end

  def epi_params
    params.require(:epi).permit(:name)
  end
end
