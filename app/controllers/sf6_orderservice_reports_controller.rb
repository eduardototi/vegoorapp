class Sf6OrderserviceReportsController < ApplicationController
    before_action :set_service_report, only: [ :edit, :destroy, :update]

    def new
        @service_report = SfeOrderserviceReport.new
        @orderservice = Sf6Orderservice.find(params[:format])
        @service_report.sf6_orderservice_id = @orderservice.id 
    end
  
    def create
        @service_report = Sf6OrderserviceReport.new(service_report_params)
        if @service_report.save
            redirect_to sf6_order_path(@service_report.sf6_orderservice.sf6_order)
        else
            render :new
        end
    end

    def edit
    end

    def update
        if @service_report.update(service_report_params)
            redirect_to order_path(@service_report.sf6_orderservice.sf6_order)
        else
            render :edit
        end
    end

    def destroy
        @service_report.destroy
        redirect_to sf6_order_path(@service_report.sf6_orderservice.sf6_order)
    end

    def destroy_photo
        if @service_report.photo.attached?
            @service_report.photo.destroy
        end
    end

    private

    def set_service_report
        @service_report = Sf6OrderserviceReport.find(params[:id])
    end
  
    def service_report_params
        params.require(:sf6_orderservice_report).permit(:parameter, :unity, :fase_a, :fase_b, :fase_c, :reference, :orderservice_id, photos: [])
    end
end
