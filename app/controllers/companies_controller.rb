class CompaniesController < ApplicationController
    before_action :set_companies, only: [:show, :edit, :destroy, :update]

  def index
    @companies = Company.all
  end

  def show
  end

  def new
    @company = Company.new
  end

  def create
    @company = Company.new(company_params)
    if @company.save
      redirect_to companies_path
    else
      render :new
    end
  end

  def destroy
    @company.destroy
    redirect_to companies_path
  end

  def edit
  end

  def update
    if @company.update(company_params)
      redirect_to company_path(@company)
    else
      render :edit
    end
  end

  private

  def set_companies
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:name, :addrees, :phone, :email)
  end
end
