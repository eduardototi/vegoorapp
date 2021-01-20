import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../util/MyUtil";
import Modal from "../Comum/Modal/Modal";
import ItemAdicao from "../Comum/Modal/ItemAdicao";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEscolha from "../Comum/Forms/CampoEscolha";
import CampoNumerico from "../Comum/Forms/CampoNumerico";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";
import "../../styles/Geral.css";

export default class FormCadastroOrdensServico extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      prestadora: "",
      servicoCampo: false,
      servicoLaboratorio: false,
      descricao: "",
      responsavel: "",
      cliente: "",
      local: "",
      contatoCliente: "",
      servicos: [],
      observacoes: "",
      epis: [],
      servicoPanelServico: "",
      servicoPanelFinalizado: "",
      servicoPanelMaquina: "",
      servicoPanelNumeroSerie: "",
      listaServicos: [],
      equipamentoPanelEquipamento: "",
      listaEquipamentos: [],
      epiPanelEpi: "",
      epiPanelQuantia: "",
      listaEpis: []
    };

    this.setPrestadora = this.setPrestadora.bind(this);
    this.setServicoCampo = this.setServicoCampo.bind(this);
    this.setServicoLaboratorio = this.setServicoLaboratorio.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
    this.setResponsavel = this.setResponsavel.bind(this);
    this.setCliente = this.setCliente.bind(this);
    this.setLocal = this.setLocal.bind(this);
    this.setContatoCliente = this.setContatoCliente.bind(this);
    this.setServicos = this.setServicos.bind(this);
    this.setObservacoes = this.setObservacoes.bind(this);
    this.setEpis = this.setEpis.bind(this);

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

  setServicos(e){
    this.setState({servicos: e.target.value});
  }

  setObservacoes(e){
    this.setState({observacoes: e.target.value});
  }

  setEpis(e){
    this.setState({epis: e.target.value});
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
    let imgVegoor = document.getElementById("imgVegoor");
    let imgSf6 = document.getElementById("imgSf6");

    //Alterna entre a exibição da logo da vegoor ou da sf6 dependendo da
    //seleção do usuário
    if(selecao === "1"){
      imgSf6.classList.remove("visible");
      imgSf6.classList.add("invisible");

      imgVegoor.classList.remove("invisible");
      imgVegoor.classList.add("visible");
    }
    else{
      imgVegoor.classList.remove("visible");
      imgVegoor.classList.add("invisible");

      imgSf6.classList.remove("invisible");
      imgSf6.classList.add("visible");
    }
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

  render() {
    return (
      <div>
        <form>
          <div className = "container">

            <div className = "row mt-2">
              <div className = "col">
                Data: {MyUtil.dataAtual()}
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoMultiplaEscolha id = "prestador"
                                      label = "Prestadora do serviço:"
                                      opc = {[["Vegoor", 1], ["SF6", 2]]}
                                      setState = {this.setPrestadora}
                                      onClick = {this.mudaImagem}/>
              </div>
              <div className = "col text-center">
                <img id = "imgVegoor"
                     className = "invisible"
                     src = "https://pianorayk.files.wordpress.com/2018/04/example.jpeg"
                     width = "100px"
                     height = "50px"/>

                <img id = "imgSf6"
                     className = "invisible"
                     src = "https://thumbs.dreamstime.com/b/example-stamp-grunge-vintage-isolated-white-background-sign-153942456.jpg"
                     width = "100px"
                     height = "50px"/>
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
                                setState = {this.setDescricao}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoDropdown id = "responsavel"
                               label = "Responsável Técnico"
                               selecionado = "Selecione..."
                               opc = {[["Técnico 1", 1], ["Técnico 2", 2]]}
                               setState = {this.setResponsavel}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoDropdown id = "cliente"
                               label = "Cliente"
                               selecionado = "Selecione..."
                               opc = {[["Cliente 1", 1], ["Cliente 2", 2]]}
                               setState = {this.setCliente}/>
              </div>
              <div className = "col">
                <CampoDropdown id = "contatoCliente"
                               label = "Contato do Cliente"
                               selecionado = "Selecione..."
                               opc = {[["Contato do Cliente 1", 1], ["Contato do Cliente 2", 2]]}
                               setState = {this.setContatoCliente}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoAreaTexto id = "local"
                                label = "Local de Execução"
                                placeholder = "true"
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
                                                     selecionado = "Selecione..."
                                                     opc = {[["Serviço 1", 1], ["Serviço 2", 2]]}
                                                     setState = {this.setServicoPanelServico}/>
                                    </div>
                                    <div className = "col mt-2">
                                      <CampoEscolha id = "finalizadoPanel"
                                                    key = "keyFinalizadoPanel"
                                                    label = " "
                                                    opc = {[["Finalizado", true]]}
                                                    setState = {this.setServicoPanelFinalizado}/>
                                    </div>
                                   </div>],
                                  [<div key = "rowServicoPanel2" className = "row">
                                    <div className = "col">
                                      <CampoDropdown id = "maquinaPanel"
                                                     key = "keyMaquinaPanel"
                                                     label = "Máquina"
                                                     selecionado = "Selecione..."
                                                     opc = {[["Máquina 1", 1], ["Máquina 2", 2]]}
                                                     setState = {this.setServicoPanelMaquina}/>
                                    </div>
                                    <div className = "col">
                                      <CampoTexto id = "numeroSeriePanel"
                                                  key = "keyNumeroSeriePanel"
                                                  label = "Número de Série"
                                                  placeholder = "true"
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
                                                     opc = {[["Equipamento 1", 1], ["Equipamento 2", 2]]}
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
                                                     opc = {[["EPI 1", 1], ["EPI 2", 2]]}
                                                     setState = {this.setEpiPanelEpi}/>

                                    </div>
                                    <div className = "col">
                                      <CampoNumerico id = "rowEpiPanel2"
                                                     key = "keyQuantiaPanel"
                                                     label = "Quantidade"
                                                     min = "0"
                                                     step = "1"
                                                     placeholder = {true}
                                                     setState = {this.setEquipamentoPanelEquipamento}/>
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
                <button type = "button" className = "btn btn-primary btn">
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
