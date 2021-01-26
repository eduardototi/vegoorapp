import PropTypes from "prop-types";
import React from "react";
import Modal from "../Comum/Modal/Modal";
import ItemAdicao from "../Comum/Modal/ItemAdicao";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEscolha from "../Comum/Forms/CampoEscolha";
import CampoNumerico from "../Comum/Forms/CampoNumerico";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";
import "../../styles/Geral.css";
import logoVegoor from "../../img/vegoorFull.png";
import logoSf6 from "../../img/sf6SemFundo.png";

export default class FormCadastroOrdensServico extends React.Component {
  static propTypes = {
    usuarioAtual: PropTypes.object.isRequired,
    responsaveisTecnicos: PropTypes.array.isRequired,
    clientes: PropTypes.array.isRequired,
    contatoDosClientes: PropTypes.array.isRequired,
    vegoor: PropTypes.object.isRequired,
    sf6: PropTypes.object.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      prestadora: "",
      servicoCampo: "",
      servicoLaboratorio: "",
      descricao: "teste vegoor",
      responsavel: "Matheus Siqueira",
      cliente: "Teste",
      local: "Local de teste vegoor",
      contatoCliente: "Contato de teste vegoor",
      observacoes: "Observações teste vegoor",
      servicoPanelServico: "",
      servicoPanelFinalizado: "",
      servicoPanelMaquina: "",
      servicoPanelNumeroSerie: "",
      listaServicos: [<ItemAdicao id = "servico1"
                                  key = "keyservico1"
                                  deleta = {() => this.deletaItem("servico1", "listaServicos")}
                                  data = {[["Serviço", 1],
                                           ["Finalizado", true],
                                           ["Máquina", 1],
                                           ["Número de Série", "123456"]]}/>,
                      <ItemAdicao id = "servico2"
                                  key = "keyservico2"
                                  deleta = {() => this.deletaItem("servico2", "listaServicos")}
                                  data = {[["Serviço", 1],
                                           ["Finalizado", false],
                                           ["Máquina", 1],
                                           ["Número de Série", "654321"]]}/>],
      equipamentoPanelEquipamento: "",
      listaEquipamentos: [<ItemAdicao id = "equipamento1"
                                      key = "keyequipamento1"
                                      deleta = {() => this.deletaItem("equipamento1", "listaEquipamentos")}
                                      data = {[["Equipamento", 2]]}/>,
                         <ItemAdicao id = "equipamento2"
                                     key = "keyequipamento2"
                                     deleta = {() => this.deletaItem("equipamento2", "listaEquipamentos")}
                                     data = {[["Equipamento", 4]]}/>],
      epiPanelEpi: "",
      epiPanelQuantia: "",
      listaEpis: [<ItemAdicao id = "epi1"
                              key = "keyepi1"
                              deleta = {() => this.deletaItem("epi1", "listaEpis")}
                              data = {[["Epi", 1],
                                       ["Quantia", 2]]}/>,
                 <ItemAdicao id = "epi2"
                             key = "keyepi2"
                             deleta = {() => this.deletaItem("epi2", "listaEpis")}
                             data = {[["Epi", 1],
                                      ["Quantia", 10]]}/>],
      notificacoes: []
    };

    this.setPrestadora = this.setPrestadora.bind(this);
    this.setServicoCampo = this.setServicoCampo.bind(this);
    this.setServicoLaboratorio = this.setServicoLaboratorio.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
    this.setResponsavel = this.setResponsavel.bind(this);
    this.setCliente = this.setCliente.bind(this);
    this.setLocal = this.setLocal.bind(this);
    this.setContatoCliente = this.setContatoCliente.bind(this);
    this.setObservacoes = this.setObservacoes.bind(this);

    this.setServicoPanelServico = this.setServicoPanelServico.bind(this);
    this.setServicoPanelFinalizado = this.setServicoPanelFinalizado.bind(this);
    this.setServicoPanelMaquina = this.setServicoPanelMaquina.bind(this);
    this.setServicoPanelNumeroSerie = this.setServicoPanelNumeroSerie.bind(this);
    this.setEquipamentoPanelEquipamento = this.setEquipamentoPanelEquipamento.bind(this);
    this.setEpiPanelEpi = this.setEpiPanelEpi.bind(this);
    this.setEpiPanelQuantia = this.setEpiPanelQuantia.bind(this);

    this.mudaImagem = this.mudaImagem.bind(this);
    this.mostraPanel = this.mostraPanel.bind(this);

    this.novoItemServico = this.novoItemServico.bind(this);
    this.novoItemEquipamento = this.novoItemEquipamento.bind(this);
    this.novoItemEpi = this.novoItemEpi.bind(this);
    this.deletaItem = this.deletaItem.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setPrestadora(e){
    this.setState({prestadora: e.target.value});
  }

  setServicoCampo(){
    this.setState({servicoCampo: !this.state.servicoCampo});
  }

  setServicoLaboratorio(){
    this.setState({servicoLaboratorio: !this.state.servicoLaboratorio});
  }

  setDescricao(e){
    this.setState({descricao: e.target.value});
  }

  setResponsavel(e){
    this.setState({responsavel: e.target.value});
  }

  setCliente(e){
    this.setState({cliente: e.target.value});
  }

  setLocal(e){
    this.setState({local: e.target.value});
  }

  setContatoCliente(e){
    this.setState({contatoCliente: e.target.value});
  }

  setObservacoes(e){
    this.setState({observacoes: e.target.value});
  }

  setServicoPanelServico(e){
    this.setState({servicoPanelServico: e.target.value});
  }

  setServicoPanelFinalizado(e){
    this.setState({servicoPanelFinalizado: e.target.value});
  }

  setServicoPanelMaquina(e){
    this.setState({servicoPanelMaquina: e.target.value});
  }

  setServicoPanelNumeroSerie(e){
    this.setState({servicoPanelNumeroSerie: e.target.value});
  }

  setEquipamentoPanelEquipamento(e){
    this.setState({equipamentoPanelEquipamento: e.target.value});
  }

  setEpiPanelEpi(e){
    this.setState({epiPanelEpi: e.target.value});
  }

  setEpiPanelQuantia(e){
    this.setState({epiPanelQuantia: e.target.value});
  }

  mudaImagem(e){
    let selecao = e.target.value;
    let logoPrestadora = document.getElementById("logoPrestadora");

    //Alterna entre a exibição da logo da vegoor ou da sf6 dependendo da
    //seleção do usuário
    logoPrestadora.src = selecao === "vegoor" ? logoVegoor : logoSf6;
  }

  mostraPanel(id){
    //Deixa visível um componente panel
    document.getElementById(id).style.display = "block";
  }

  novoItemServico(){
    //Cópia da lista atual de serviços para alteração
    let novaListaServicos = this.state.listaServicos;
    let id = "itemListaServico" + MyUtil.numeroAleatorio();
    let key = "keyItemListaServico" + MyUtil.numeroAleatorio();

    //Adiciona um novo serviço a lista de serviços
    novaListaServicos.push(<ItemAdicao id = {id}
                                       key = {key}
                                       deleta = {() => this.deletaItem(id, "listaServicos")}
                                       data = {[["Serviço", this.state.servicoPanelServico],
                                                ["Finalizado", this.state.servicoPanelFinalizado],
                                                ["Máquina", this.state.servicoPanelMaquina],
                                                ["Número de Série", this.state.servicoPanelNumeroSerie]]}/>)

    //Atualização da lista de serviços com o novo item inserido
    this.setState({listaServicos: novaListaServicos});
  }

  novoItemEquipamento(){
    //Cópia da lista atual de equipamentos para alteração
    let novaListaEquipamentos = this.state.listaEquipamentos;
    let id = "itemListaEquipamento" + MyUtil.numeroAleatorio();
    let key = "keyItemListaEquipamento" + MyUtil.numeroAleatorio();

    //Adiciona um novo equipamento a lista de equipamentos
    novaListaEquipamentos.push(<ItemAdicao id = {id}
                                           key = {key}
                                           deleta = {() => this.deletaItem(id, "listaEquipamentos")}
                                           data = {[["Equipamento", this.state.equipamentoPanelEquipamento]]}/>)

    //Atualização da lista de equipamentos com o novo item inserido
    this.setState({listaEquipamentos: novaListaEquipamentos});
  }

  novoItemEpi(){
    //Cópia da lista atual de epis para alteração
    let novaListaEpis = this.state.listaEpis;
    let id = "itemListaEpi" + MyUtil.numeroAleatorio();
    let key = "keyItemListaEpi" + MyUtil.numeroAleatorio();

    //Adiciona uma nova epi a lista de epis
    novaListaEpis.push(<ItemAdicao id = {id}
                                   key = {key}
                                   deleta = {() => this.deletaItem(id, "listaEpis")}
                                   data = {[["Epi", this.state.epiPanelEpi],
                                            ["Quantia", this.state.epiPanelQuantia]]}/>)

    //Atualização da lista de epis com o novo item inserido
    this.setState({listaEpis: novaListaEpis});
  }

  deletaItem(id, state){
    //Busca em um state específico o id do componente desejado e remove
    for(let i in this.state[state]){
      if(this.state[state][i].props.id === id){
        delete this.state[state][i];
      }
    }

    //Remove do html o elemento da lista
    document.getElementById(id).remove();
  }

  handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Prestadora do Serviço", "Descrição", "Responsável Técnico",
                                                    "Cliente", "Contato do Cliente", "Local de Execução", "Observações"],
                                                   {"prestadora": this.state.prestadora,
                                                    "descricao": this.state.descricao,
                                                    "responsavel": this.state.responsavel,
                                                    "cliente": this.state.cliente,
                                                    "contatoCliente": this.state.contatoCliente,
                                                    "local": this.state.local,
                                                    "observacoes": this.state.observacoes});

    //Notifica os campos vazios
    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      //Notifica que pelo menos um serviço precisa ser selecionado
      if(this.state.servicoCampo == "" && this.state.servicoLaboratorio == ""){
        notificacoesNovas.push(<Notificacao tipo = "erro" msg = "Selecione pelo menos um tipo de serviço"/>);
      }
      else{
        let url = this.state.prestadora == "vegoor" ? "/create_vegoor_order" : "/create_sf6_order";

        let payload = {"location": this.state.local,
                       "comments": this.state.observacoes,
                       "field": this.state.servicoCampo,
                       "laboratory": this.state.servicoLaboratorio,
                       "contact_id": parseInt(this.state.contatoCliente),
                       "description": this.state.descricao,
                       "user_id": this.props.usuarioAtual.id,
                       "status": false,
                       "client_id": parseInt(this.state.cliente),
                       "orderservices_attributes": {"id": 1}}

        console.log(payload);

        let response = MyRequests.post(url, payload);
        let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

        notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);

        /*
        orderservices_attributes: [:id, :service_id, :order_id, :status, :machine_id, :machineserie, :_destroy],
        orderutensils_attributes: [:id, :utensil_id, :order_id, :status, :_destroy],
        epi_orders_attributes: [ :id, :order_id, :epi_id, :amount, :_destroy]

        let url = "/create_epi";
        let payload = {"name": this.state.nome};
        let response = MyRequests.post(url, payload);
        let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

        notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
        */
      }
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render() {
    return (
      <div>
        <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>

        <form onSubmit = {this.handleSubmit} className = "mt-2">
          <div className = "container">

            <div className = "row mt-2">
              <div className = "col">
                Data: {MyUtil.dataAtual()}
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoMultiplaEscolha id = "prestador"
                                      label = "Prestadora do Serviço:"
                                      opc = {[["Vegoor", "vegoor"], ["SF6", "sf6"]]}
                                      setState = {this.setPrestadora}
                                      value = {this.state.prestadora}
                                      onClick = {this.mudaImagem}/>
              </div>
              <div className = "col">
                <img id = "logoPrestadora"
                     className = "img-fluid float-right"
                     width = "125px"
                     height = "125px"
                     src = ""/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoEscolha id = "servicoCampo"
                              opc = {[["Serviço de Campo", true]]}
                              setState = {this.setServicoCampo}/>

                <CampoEscolha id = "servicoLaboratorio"
                              opc = {[["Serviço de Laboratório", true]]}
                              setState = {this.setServicoLaboratorio}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoAreaTexto id = "descricao"
                                label = "Descrição"
                                placeholder = "true"
                                rows = "5"
                                value = {this.state.descricao}
                                setState = {this.setDescricao}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoDropdown id = "responsavel"
                               label = "Responsável Técnico"
                               opc = {this.props.responsaveisTecnicos}
                               selecionado = {this.state.responsavel}
                               setState = {this.setResponsavel}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoDropdown id = "cliente"
                               label = "Cliente"
                               opc = {this.props.clientes}
                               selecionado = {this.state.cliente}
                               setState = {this.setCliente}/>
              </div>
              <div className = "col">
                <CampoDropdown id = "contatoCliente"
                               label = "Contato do Cliente"
                               opc = {this.props.contatoDosClientes}
                               selecionado = {this.state.contatoCliente}
                               setState = {this.setContatoCliente}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoAreaTexto id = "local"
                                label = "Local de Execução"
                                placeholder = "true"
                                value = {this.state.local}
                                setState = {this.setLocal}/>
              </div>
            </div>

            {/*Sessão de Serviços*/}

            <div className = "row mt-3">
              <div className = "col text-left">
                <h5 className = "h5">
                  Serviços
                </h5>
              </div>

              <div className = "col text-right">
                <button type = "button" className = "btn btn-primary btn-sm" onClick = {() => this.mostraPanel("modalServico")}>
                  Adicionar Serviço
                </button>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <Modal id = "modalServico"
                       key = "keyModalServico"
                       titulo = "Adicionar um Serviço"
                       novoItem = {this.novoItemServico}
                       campos = {[[<div key = "rowServicoPanel1" className = "row">
                                    <div className = "col">
                                      <CampoDropdown id = "servicoPanel"
                                                     key = "keyServicoPanel"
                                                     label = "Serviço"
                                                     opc = {this.props[this.state.prestadora].servicos}
                                                     selecionado = {this.state.servicoPanelServico}
                                                     setState = {this.setServicoPanelServico}/>
                                    </div>
                                    <div className = "col mt-2">
                                      <CampoEscolha id = "finalizadoPanel"
                                                    key = "keyFinalizadoPanel"
                                                    label = " "
                                                    opc = {[["Finalizado", true]]}
                                                    selecionado = {this.state.servicoPanelFinalizado}
                                                    setState = {this.setServicoPanelFinalizado}/>
                                    </div>
                                   </div>],
                                  [<div key = "rowServicoPanel2" className = "row">
                                    <div className = "col">
                                      <CampoDropdown id = "maquinaPanel"
                                                     key = "keyMaquinaPanel"
                                                     label = "Máquina"
                                                     opc = {this.props[this.state.prestadora].maquinas}
                                                     selecionado = {this.state.servicoPanelMaquina}
                                                     setState = {this.setServicoPanelMaquina}/>
                                    </div>
                                    <div className = "col">
                                      <CampoTexto id = "numeroSeriePanel"
                                                  key = "keyNumeroSeriePanel"
                                                  label = "Número de Série"
                                                  placeholder = "true"
                                                  value = {this.state.servicoPanelNumeroSerie}
                                                  setState = {this.setServicoPanelNumeroSerie}/>
                                    </div>
                                  </div>]]}/>
              </div>
            </div>

            <div>
              {this.state.listaServicos.map((servico) => {
                return (
                  <div className = "row mt-2" key = {"listaServicos" + MyUtil.keyAleatoria()}>
                    <div className = "col">
                      {servico}
                    </div>
                  </div>
                )
              })}
            </div>

            {/*Fim da Sessão de Serviços*/}


            {/*Sessão de Equipamentos*/}

            <div className = "row mt-4">
              <div className = "col text-left">
                <h5 className = "h5">
                  Equipamentos
                </h5>
              </div>

              <div className = "col text-right">
                <button type = "button" className = "btn btn-primary btn-sm" onClick = {() => this.mostraPanel("modalEquipamento")}>
                  Adicionar Equipamento
                </button>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <Modal id = "modalEquipamento"
                       key = "keyModalEquipamento"
                       titulo = "Adicionar um Equipamento"
                       novoItem = {this.novoItemEquipamento}
                       campos = {[[<div key = "rowEuipamentoPanel1" className = "row">
                                    <div className = "col">
                                      <CampoDropdown id = "equipamentoPanel"
                                                     key = "keyServicoPanel"
                                                     label = "Equipamento"
                                                     selecionado = "Selecione..."
                                                     opc = {this.props[this.state.prestadora].equipamentos}
                                                     selecionado = {this.state.equipamentoPanelEquipamento}
                                                     setState = {this.setEquipamentoPanelEquipamento}/>
                                    </div>
                                   </div>]]}/>
              </div>
            </div>

            <div>
              {this.state.listaEquipamentos.map((equipamento) => {
                return (
                  <div className = "row mt-2" key = {"listaEquipamentos" + MyUtil.keyAleatoria()}>
                    <div className = "col">
                      {equipamento}
                    </div>
                  </div>
                )
              })}
            </div>

            {/*Fim da Sessão de Equipamentos*/}


            {/*Sessão de EPIs*/}

            <div className = "row mt-4">
              <div className = "col text-left">
                <h5 className = "h5">
                  EPIs
                </h5>
              </div>

              <div className = "col text-right">
                <button type = "button" className = "btn btn-primary btn-sm" onClick = {() => this.mostraPanel("modalEpi")}>
                  Adicionar EPI
                </button>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <Modal id = "modalEpi"
                       key = "keyModalEpi"
                       titulo = "Adicionar uma EPI"
                       novoItem = {this.novoItemEpi}
                       campos = {[[<div key = "rowEpiPanel1" className = "row">
                                    <div className = "col">
                                      <CampoDropdown id = "epiPanel"
                                                     key = "keyEpiPanel"
                                                     label = "EPI"
                                                     selecionado = "Selecione..."
                                                     opc = {this.props[this.state.prestadora].epis}
                                                     selecionado = {this.state.epiPanelEpi}
                                                     setState = {this.setEpiPanelEpi}/>

                                    </div>
                                    <div className = "col">
                                      <CampoNumerico id = "rowEpiPanel2"
                                                     key = "keyQuantiaPanel"
                                                     label = "Quantidade"
                                                     min = "0"
                                                     step = "1"
                                                     placeholder = {true}
                                                     value = {this.state.epiPanelQuantia}
                                                     setState = {this.setEpiPanelQuantia}/>
                                    </div>
                                   </div>]]}/>
              </div>
            </div>

            <div>
              {this.state.listaEpis.map((epi) => {
                return (
                  <div className = "row mt-2" key = {"listaEpis" + MyUtil.keyAleatoria()}>
                    <div className = "col">
                      {epi}
                    </div>
                  </div>
                )
              })}
            </div>

            {/*Fim da Sessão de EPIs*/}

            <div className = "row mt-4">
              <div className = "col">
                <CampoAreaTexto id = "observacoes"
                                label = "Observações"
                                placeholder = {true}
                                rows = "5"
                                setState = {this.setObservacoes}/>
              </div>
            </div>

            <div className = "row mt-5">
              <div className = "col text-center">
                <button type = "submit" className = "btn btn-primary btn">
                  Emitir
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}
