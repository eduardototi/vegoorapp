class VegoorReport < ApplicationRecord
    belongs_to :order
    has_many :orderservices, through: :orders
    has_many_attached :photos
    after_create :send_confirmation
    after_update :send_confirmation
    
    private

    def send_confirmation
        VegoorReportMailer.with(vegoor_report: self).confirmation.deliver_now!
    end
end
