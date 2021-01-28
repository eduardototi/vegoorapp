class VegoorReportsController < ApplicationController
    before_action :set_vegoor_report, only: [:show, :edit, :destroy, :update]

    def index
      @vegoor_reports = VegoorReport.all
    end
  
    def show
      @vegoor_reports = VegoorReport.where(vegoor_report_id: params[:id])
      @orderservice = Orderservice
    end
  
    def new
      @vegoor_report = VegoorReport.new
      @order = Order.find(params[:order_id])
      @vegoor_report.order_id = @order.id
    end
  
    def create
      @vegoor_report = VegoorReport.new(vegoor_report_params)
      if @vegoor_report.save
          redirect_to vegoor_report_path(@vegoor_report)
      else
          render :new
      end
    end
  
    def destroy
        @vegoor_report.destroy
        redirect_to vegoor_reports_path
    end
  
    def edit
      @order = Order.find(params[:id])
    end
  
    def update
      if @vegoor_report.update(vegoor_report_params)
        redirect_to vegoor_report_path(@vegoor_report)
      else
        render :edit
      end
    end
  
    private
  
    def set_vegoor_report
      @vegoor_report = VegoorReport.find(params[:id])
    end
  
    def vegoor_report_params
      params.require(:vegoor_report).permit(:goal, :reception_test, :warrant, :conclusion, :observations, :order_id)
    end
end



