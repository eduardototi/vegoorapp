class OrderserviceReportsController < ApplicationController

    before_action :set_service_report, only: [ :edit, :destroy, :update]

    def new
      @orderservice = Orderservice.find(params[:format])
    end

    def create
      @service_report = OrderserviceReport.new(service_report_params)
      @service_report.save
    end

    def edit
      @report = OrderserviceReport.find(params[:id])
      @idOrdemServico = Orderservice.find(@report.orderservice_id).order_id
    end

    def update
      @service_report.update(service_report_params)
    end

    def destroy
      @service_report.destroy
      redirect_to order_path(@service_report.orderservice.order)
    end

    def destroy_photo
      if @service_report.photo.attached?
          @service_report.photo.destroy
      end
    end

    private

    def set_service_report
      @service_report = OrderserviceReport.find(params[:id])
    end

    def service_report_params
      params.require(:orderservice_report).permit(:parameter, :unity, :fase_a, :fase_b, :fase_c, :reference, :orderservice_id)
    end

end
