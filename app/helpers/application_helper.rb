module ApplicationHelper
    def set_company(order)
        if order.company_id == 1
            [order.vegoor_order, order.company.name]
        else
            [order.sf6_order, order.company.name]
        end
    end

    def set_report_company(report)
        if report.order.company_id == 1
            [report.order.vegoor_order, report.order.company.name]
        else
            [report.order.sf6_order, report.order.company.name]
        end
    end

end
