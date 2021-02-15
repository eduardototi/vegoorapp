# Preview all emails at http://localhost:3000/rails/mailers/vegoor_report_mailer
class VegoorReportMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/vegoor_report_mailer/confirmation
  def confirmation
    VegoorReportMailer.confirmation
  end

end
