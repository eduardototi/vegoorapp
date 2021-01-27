class OrderserviceReportsController < ApplicationController

    before_action :set_service_report, only: [ :edit, :destroy, :update]

    def new
        @service_report = OrderserviceReport.new
        @orderservice = Orderservice.find(params[:format])
        @service_report.orderservice_id = @orderservice.id 
    end
  
    def create
        @service_report = OrderserviceReport.new(service_report_params)
        if @service_report.save
            redirect_to order_path(@service_report.orderservice.order)
        else
            render :new
        end
    end

    def edit
    end

    def update
        if @service_report.update(service_report_params)
            redirect_to order_path(@service_report.orderservice.order)
        else
            render :edit
        end
    end

    def destroy
        @service_report.destroy
        redirect_to order_path(@service_report.orderservice.order)
    end

    private

    def set_service_report
        @service_report = OrderserviceReport.find(params[:id])
    end
  
    def service_report_params
        params.require(:orderservice_report).permit(:parameter, :photo, :unity, :fase_a, :fase_b, :fase_c, :reference, :orderservice_id)
    end

end
