class OrderMailer < ApplicationMailer
  before_action :load_order
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.order_mailer.confirmation.subject
  #
  def confirmation
    @order = params[:order]
    mail to: @order.client.email, subject: "Ordem de Serviço para #{@order.client.razao_social}"
    mail to: @order.contact.email, subject: "Ordem de Serviço para #{@order.client.razao_social}"
    mail to: @order.user.email, subject: "Ordem de Serviço para #{@order.client.razao_social}"
  end

  private
 
  def load_order
    @order = params[:rental]
  end
end
