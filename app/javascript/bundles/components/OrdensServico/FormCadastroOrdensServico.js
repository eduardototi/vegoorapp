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
      listaServicos: []
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

    this.mudaImagem = this.mudaImagem.bind(this);
    this.mostraPanel = this.mostraPanel.bind(this);

    this.novoItemServico = this.novoItemServico.bind(this);
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
                                       data = {[["Serviço", this.state.servicoPanelServico],
                                               ["Finalizado", this.state.servicoPanelFinalizado],
                                               ["Máquina", this.state.servicoPanelMaquina],
                                               ["Número de Série", this.state.servicoPanelNumeroSerie]]}/>)

    //Atualização da lista de serviços com o novo item inserido
    this.setState({listaServicos: novaListaServicos});
  }

  render() {
    return (
      <div>
        <form>
          <div className = "container">

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
                  <div className = "row mt-2" key = {"lista" + MyUtil.keyAleatoria()}>
                    <div className = "col">
                      {servico}
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </form>
      </div>
    );
  }
}
