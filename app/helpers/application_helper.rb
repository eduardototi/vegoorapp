module ApplicationHelper
    def set_company(order)
        if order.company_id == 1
            [order.vegoor_order, order.company.name]  
        else
            [order.sf6_order, order.company.name]
        end
    end
end
