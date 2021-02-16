class VegoorReportMailer < ApplicationMailer
  before_action :load_vegoor_report
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.vegoor_report_mailer.confirmation.subject
  #
  def confirmation
    @vegoor_report = params[:vegoor_report]
    mail to: @vegoor_report.order.client.email, subject: "Laudo #{@vegoor_report.order.client.razao_social}"
  end

  private

  def load_vegoor_report
    @vegoor_report = params[:order]
  end
end
