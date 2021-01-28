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

export default class FormEdicaoOrdemServico extends React.Component {
  static propTypes = {
    usuarioAtual: PropTypes.object.isRequired,
    responsaveisTecnicos: PropTypes.array.isRequired,
    clientes: PropTypes.array.isRequired,
    contatoDosClientes: PropTypes.array.isRequired,
    servicos: PropTypes.array.isRequired,
    maquinas: PropTypes.array.isRequired,
    equipamentos: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      servicoCampo: this.props.data.order.field,
      servicoLaboratorio: this.props.data.order.laboratory,
      descricao: this.props.data.order.description,
      responsavel: this.props.data.responsavel.id,
      cliente: this.props.data.cliente.id,
      local: this.props.data.order.location,
      contatoCliente: this.props.data.contato.id,
      observacoes: this.props.data.order.comments,
      servicoPanelServico: "",
      servicoPanelFinalizado: "",
      servicoPanelMaquina: "",
      servicoPanelNumeroSerie: "",
      listaServicos: [],
      equipamentoPanelEquipamento: "",
      listaEquipamentos: [],
      epiPanelEpi: "",
      epiPanelQuantia: "",
      listaEpis: [],
      notificacoes: []
    };

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

    this.mostraPanel = this.mostraPanel.bind(this);

    this.novoItemServico = this.novoItemServico.bind(this);
    this.novoItemEquipamento = this.novoItemEquipamento.bind(this);
    this.novoItemEpi = this.novoItemEpi.bind(this);
    this.deletaItem = this.deletaItem.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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

  mostraPanel(id){
    //Deixa visível um componente panel
    document.getElementById(id).style.display = "block";
  }

  novoItemServico(){
    if(this.state.servicoPanelServico != "" && this.state.servicoPanelMaquina != "" &&
       this.state.servicoPanelNumeroSerie != ""){
      //Cópia da lista atual de serviços para alteração
      let novaListaServicos = this.state.listaServicos;
      let id = "itemListaServico" + MyUtil.numeroAleatorio();
      let key = "keyItemListaServico" + MyUtil.numeroAleatorio();
      let finalizado = this.state.servicoPanelFinalizado !== "true" ? "Não" : "Sim";
      //Busca na matriz de serviços e máquinas seus respectivos nomes pelo seu id e os armazena
      let servico = MyUtil.buscaMatriz(this.props.servicos, this.state.servicoPanelServico)[0];
      let maquina = MyUtil.buscaMatriz(this.props.maquinas, this.state.servicoPanelMaquina)[0];

      //Adiciona um novo serviço a lista de serviços
      novaListaServicos.push(<ItemAdicao id = {id}
                                         key = {key}
                                         deleta = {() => this.deletaItem(id, "listaServicos")}
                                         data = {[["Serviço", servico, this.state.servicoPanelServico],
                                                  ["Finalizado", finalizado, this.state.servicoPanelFinalizado],
                                                  ["Máquina", maquina, this.state.servicoPanelMaquina],
                                                  ["Número de Série", this.state.servicoPanelNumeroSerie]]}/>)

      //Atualização da lista de serviços com o novo item inserido
      this.setState({listaServicos: novaListaServicos});
    }
  }

  //Adiciona a tela os serviços já existentes
  async adicionaServicos(){
    for(let i in this.props.data.servicos){
      //Cópia da lista atual de serviços para alteração
      let novaListaServicos = this.state.listaServicos;
      let id = "itemListaServico" + MyUtil.numeroAleatorio();
      let key = "keyItemListaServico" + MyUtil.numeroAleatorio();
      let finalizado = this.props.data.servicos[i].status !== true ? "Não" : "Sim";

      //Adiciona um novo serviço a lista de serviços
      novaListaServicos.push(<ItemAdicao id = {id}
                                         key = {key}
                                         deleta = {() => this.deletaItem(id, "listaServicos")}
                                         data = {[["Serviço",
                                                   this.props.data.servicos[i].nome,
                                                   this.props.data.servicos[i].id],
                                                  ["Finalizado",
                                                   finalizado,
                                                   this.props.data.servicos[i].status],
                                                  ["Máquina",
                                                   this.props.data.servicos[i].maquina,
                                                   this.props.data.servicos[i].idMaquina],
                                                  ["Número de Série", this.props.data.servicos[i].serie]]}/>)

      //Atualização da lista de serviços com o novo item inserido
      await this.setState({listaServicos: novaListaServicos});
    }
  }

  novoItemEquipamento(){
    if(this.state.equipamentoPanelEquipamento != ""){
      //Cópia da lista atual de equipamentos para alteração
      let novaListaEquipamentos = this.state.listaEquipamentos;
      let id = "itemListaEquipamento" + MyUtil.numeroAleatorio();
      let key = "keyItemListaEquipamento" + MyUtil.numeroAleatorio();
      //Busca na matriz de equipamentos seu respectivo nome pelo seu id e o armazena
      let equipamento = MyUtil.buscaMatriz(this.props.equipamentos, this.state.equipamentoPanelEquipamento)[0];

      //Adiciona um novo equipamento a lista de equipamentos
      novaListaEquipamentos.push(<ItemAdicao id = {id}
                                             key = {key}
                                             deleta = {() => this.deletaItem(id, "listaEquipamentos")}
                                             data = {[["Equipamento", equipamento, this.state.equipamentoPanelEquipamento]]}/>)

      //Atualização da lista de equipamentos com o novo item inserido
      this.setState({listaEquipamentos: novaListaEquipamentos});
    }
  }

  //Adicona os equipamentos já existentes na tela
  async adicionaEquipamentos(){
    for(let i in this.props.data.equipamentos){
      //Cópia da lista atual de equipamentos para alteração
      let novaListaEquipamentos = this.state.listaEquipamentos;
      let id = "itemListaEquipamento" + MyUtil.numeroAleatorio();
      let key = "keyItemListaEquipamento" + MyUtil.numeroAleatorio();;

      //Adiciona um novo equipamento a lista de equipamentos
      novaListaEquipamentos.push(<ItemAdicao id = {id}
                                             key = {key}
                                             deleta = {() => this.deletaItem(id, "listaEquipamentos")}
                                             data = {[["Equipamento",
                                                       this.props.data.equipamentos[i].name,
                                                       this.props.data.equipamentos[i].id]]}/>)

      //Atualização da lista de equipamentos com o novo item inserido
      await this.setState({listaEquipamentos: novaListaEquipamentos});
    }
  }

  novoItemEpi(){
    if(this.state.epiPanelEpi != "" && this.state.epiPanelQuantia != ""){
      //Cópia da lista atual de epis para alteração
      let novaListaEpis = this.state.listaEpis;
      let id = "itemListaEpi" + MyUtil.numeroAleatorio();
      let key = "keyItemListaEpi" + MyUtil.numeroAleatorio();
      //Busca na matriz de epis seu respectivo nome pelo seu id e o armazena
      let epi = MyUtil.buscaMatriz(this.props.epis, this.state.epiPanelEpi)[0];

      //Adiciona uma nova epi a lista de epis
      novaListaEpis.push(<ItemAdicao id = {id}
                                     key = {key}
                                     deleta = {() => this.deletaItem(id, "listaEpis")}
                                     data = {[["Epi", epi, this.state.epiPanelEpi],
                                              ["Quantia", this.state.epiPanelQuantia]]}/>)

      //Atualização da lista de epis com o novo item inserido
      this.setState({listaEpis: novaListaEpis});
    }
  }

  //Adiciona as epis já existentes na tela
  async adicionaEpis(){
    for(let i in this.props.data.epis){
      //Cópia da lista atual de epis para alteração
      let novaListaEpis = this.state.listaEpis;
      let id = "itemListaEpi" + MyUtil.numeroAleatorio();
      let key = "keyItemListaEpi" + MyUtil.numeroAleatorio();

      //Adiciona uma nova epi a lista de epis
      novaListaEpis.push(<ItemAdicao id = {id}
                                     key = {key}
                                     deleta = {() => this.deletaItem(id, "listaEpis")}
                                     data = {[["Epi",
                                               this.props.data.epis[i].nome,
                                               this.props.data.epis[i].id],
                                              ["Quantia",
                                               this.props.data.epis[i].quantia]]}/>)

      //Atualização da lista de epis com o novo item inserido
      await this.setState({listaEpis: novaListaEpis});
    }
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

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Prestadora do Serviço", "Descrição", "Responsável Técnico",
                                                    "Cliente", "Contato do Cliente", "Local de Execução"],
                                                   {"prestadora": this.state.prestadora,
                                                    "descricao": this.state.descricao,
                                                    "responsavel": this.state.responsavel,
                                                    "cliente": this.state.cliente,
                                                    "contatoCliente": this.state.contatoCliente,
                                                    "local": this.state.local});

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
        //Cria a url do request
        let url = "/" + this.props.linkAcao + "/" + this.props.data.order.id;
        let payloadEpis = {};
        let payloadEquipamentos = {};
        let payloadServicos = {};

        for(let i in this.state.listaEpis){
          payloadEpis[Date.now()] = {
            "epi_id": this.state.listaEpis[i].props.data[0][2],
            "amount": this.state.listaEpis[i].props.data[1][1],
          }
        }

        for(let i in this.state.listaEquipamentos){
          payloadEquipamentos[Date.now()] = {
            "utensil_id": this.state.listaEquipamentos[i].props.data[0][2]
          }
        }

        for(let i in this.state.listaServicos){
          payloadServicos[Date.now()] = {
            "service_id": this.state.listaServicos[i].props.data[0][2],
            "status": this.state.listaServicos[i].props.data[1][2] ? 1 : 0,
            "machine_id": this.state.listaServicos[i].props.data[2][2],
            "machineserie": this.state.listaServicos[i].props.data[3][1]
          }
        }

        let payload = {"order": {"location": this.state.local,
                                 "comments": this.state.observacoes,
                                 "field": this.state.servicoCampo != "" ? true : false,
                                 "laboratory": this.state.servicoLaboratorio != "" ? true : false,
                                 "contact_id": parseInt(this.state.contatoCliente),
                                 "description": this.state.descricao,
                                 "user_id": this.props.usuarioAtual.id,
                                 "status": false,
                                 "client_id": parseInt(this.state.cliente),
                                 "orderservices_attributes": payloadServicos,
                                 "orderutensils_attributes": payloadEquipamentos,
                                 "epi_orders_attributes": payloadEpis}};

        let response = await MyRequests.put(url, payload);
        let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

        notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
      }
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  async componentDidMount(){
    await this.adicionaServicos();
    await this.adicionaEquipamentos();
    await this.adicionaEpis();
  }

  render() {
    return (
      <div className = "bg-light">

        <form onSubmit = {this.handleSubmit} className = "mt-2">
          <div className = "container">

            <div className = "row">
              <div className = "col mt-2">
                <h3 className = "text-center">Edição de Ordem de Serviço #{this.props.data.order.id}</h3>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                Data: {MyUtil.dataAtual()}
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoEscolha id = "servicoCampo"
                              opc = {[["Serviço de Campo", true]]}
                              selecionado = {this.state.servicoCampo}
                              setState = {this.setServicoCampo}/>

                <CampoEscolha id = "servicoLaboratorio"
                              opc = {[["Serviço de Laboratório", true]]}
                              selecionado = {this.state.servicoLaboratorio}
                              setState = {this.setServicoLaboratorio}/>
              </div>
              <div className = "col">
                <img id = "logoPrestadora"
                     className = "img-fluid float-right"
                     width = "225px"
                     height = "225px"
                     src = {this.props.data.prestadora == "vegoor" ? logoVegoor : logoSf6}/>
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
                                                     opc = {this.props.servicos}
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
                                                     opc = {this.props.maquinas}
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
                                                     opc = {this.props.equipamentos}
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
                                                     opc = {this.props.epis}
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
                                value = {this.state.observacoes}
                                setState = {this.setObservacoes}/>
              </div>
            </div>

            <div className = "row mt-5">
              <div className = "col text-center mb-2">
                <button type = "submit" className = "btn btn-primary btn">
                  Salvar Alterações
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}
