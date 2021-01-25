class OrderserviceReportsController < ApplicationController

    def new
        @service_report = OrderserviceReport.new
        @orderservice = Orderservice.find(params[:format])
        @service_report.orderservice_id = @orderservice.id 
    end
  
    def create
        @service_report = OrderserviceReport.new(service_report_params)
        if @service_report.save
            redirect_to orders_path
        else
            render :new
        end
    end
  
    def service_report_params
        params.require(:orderservice_report).permit(:parameter, :unity, :fase_a, :fase_b, :fase_c, :reference, :orderservice_id)
    end

end
