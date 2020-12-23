class UtensilsController < ApplicationController

  before_action :set_utensils, only: [:show, :edit, :destroy, :update]

  def index
    @utensils = Utensil.all
  end

  def show
  end

  def new
    @utensil = Utensil.new
  end

  def create
    @utensil = Utensil.new(utensil_params)
    if @utensil.save
      redirect_to utensils_path
    else
      render :new
    end
  end

  def destroy
    @utensil.destroy
    redirect_to utensils_path
  end

  def edit
  end

  def update
    if @utensil.update(utensil_params)
      redirect_to utensil_path(@utensil)
    else
      render :edit
    end
  end

  private

  def set_utensils
    @utensil = Utensil.find(params[:id])
  end

  def utensil_params
    params.require(:utensil).permit(:name)
  end
end
