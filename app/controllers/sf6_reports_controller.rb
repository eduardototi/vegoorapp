class Sf6ReportsController < ApplicationController
    before_action :set_sf6_report, only: [:show, :edit, :destroy, :update]

    def index
        @sf6_reports = Sf6Report.all
    end
  
    def show
        @sf6_reports = Sf6Report.where(sf6_report_id: params[:id])  
    end
  
    def new
      @sf6_report = Sf6Report.new
      @sf6_order = Sf6Order.find(params[:sf6_order_id])
      @sf6_report.sf6_order_id = @sf6_order.id
      
    end
  
    def create
      @sf6_report = Sf6Report.new(sf6_report_params)
      if @sf6_report.save
          redirect_to sf6_report_path(@sf6_report)
      else
          render :new
      end
    end
  
    def destroy
        @sf6_report.destroy
        redirect_to sf6_reports_path
    end
  
    def edit
        @sf6_order = Sf6Order.find(params[:id])
    end
  
    def update
      if @sf6_report.update(sf6_report_params)
        redirect_to sf6_report_path(@sf6_report)
      else
        render :edit
      end
    end
  
    private
  
    def set_sf6_report
      @sf6_report = Sf6Report.find(params[:id])
    end
  
    def sf6_report_params
      params.require(:sf6_report).permit(:goal, :reception_test, :warrant, :conclusion, :observations, :sf6_order_id)
    end
end
