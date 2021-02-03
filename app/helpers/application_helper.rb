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

    def show_message_order
        'Pela presente Ordem de serviço, objetivamos informar os trabalhadores que executam suas atividades laborais nesse setor, conforme estabelece a NR-1 , item 1.7, sobre as condições de segurança e saúde às quais estão expostos, como medida preventiva e ,tendo como parâmetro os agentes físicos, químicos, e biológicos citados na NR-9 - Programa de Prevenção de Riscos Ambientais(Lei nº 6514 de 22/12/1977,Portaria nº 3214 de 08/06/1978), bem como os procedimentos de aplicação da NR-6  - Equipamento de Proteção Individual – EPI , NR-17 – Ergonomia , de forma a padronizar comportamentos para prevenir acidentes e/ou doenças ocupacionais e NR-10 Segurança Em Instalações e Serviços em Eletricidade.'

    end

    def show_message_report
        'Estudos realizados por instituições de pesquisas em energia elétrica, bem como fabricantes dos equipamentos elétricos, demonstram que a ocorrência de falhas incipientes nos equipamentos isolados a SF6, provocam a decomposição parcial deste gás, ocasionando a formação de compostos que podem fornecer informações sobre a existência ou não destas falhas incipientes, potenciais causadores de vazamentos. As descargas elétricas de baixa ou alta energia em hexafluoreto de enxofre (SF6) levam à geração e ao acúmulo de produtos de decomposição estáveis. Um dos efeitos negativos destes produtos sobre as superfícies isolantes de disjuntores e compartimentos de subestações é a redução substancial da resistência de superfície bem como uma degeneração irreversível dos elementos isolantes, condutores e de vedação por corrosão. Além disso, é também de fundamental importância, do ponto de vista da durabilidade e da manutenção preventiva dos equipamentos, o controle da qualidade do gás isolante relativamente à contaminação por umidade e outras impurezas, que ocorre quando o equipamento apresenta vazamentos. O gás hexafluoreto de enxofre (SF6) é mais de 22.000 vezes mais ativo na geração do efeito estufa do que o dióxido de carbono (CO2) e persiste na atmosfera por mais de 3.000 anos. Assim sua emissão à atmosfera é restrita pelo tratado de Viena, no âmbito do protocolo de Kioto. É, portanto, de fundamental importância o controle dos vazamentos em instalações elétricas isoladas a gás SF6.'
    end

end
