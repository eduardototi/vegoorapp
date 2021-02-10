import PropTypes from "prop-types";
import React from "react";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormCadastroRelatorioOrdemServico extends React.Component {
  static propTypes = {

  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      idOrdem: this.props.idOrdem,
      parametro: "",
      unidade: "",
      faseA: "",
      faseB: "",
      faseC: "",
      referencia: "",
      notificacoes: []
    };

    this.setParametro = this.setParametro.bind(this);
    this.setUnidade = this.setUnidade.bind(this);
    this.setFaseA = this.setFaseA.bind(this);
    this.setFaseB = this.setFaseB.bind(this);
    this.setFaseC = this.setFaseC.bind(this);
    this.setReferencia = this.setReferencia.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setParametro(e){
    this.setState({parametro: e.target.value});
  }

  setUnidade(e){
    this.setState({unidade: e.target.value});
  }

  setFaseA(e){
    this.setState({faseA: e.target.value});
  }

  setFaseB(e){
    this.setState({faseB: e.target.value});
  }

  setFaseC(e){
    this.setState({faseC: e.target.value});
  }

  setReferencia(e){
    this.setState({referencia: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];

    //Cria a url do request
    let url = "/create_order_report";
    let payload = {"parameter": this.state.parametro,
                   "unity": this.state.unidade,
                   "fase_a": this.state.faseA,
                   "fase_b": this.state.faseB,
                   "fase_c": this.state.faseC,
                   "reference": this.state.referencia,
                   "orderservice_id": this.state.id};
    let response = await MyRequests.post(url, payload);

    response["code"] != 200 ? notificacoesNovas.push(<Notificacao tipo = {"erro"} msg = {response["msg"]}/>)
                            : window.location.href = "../orders/" + this.state.idOrdem;

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render() {
    return (
      <div className = "bg-light">
        <form onSubmit = {this.handleSubmit} className = "mt-2">
          <div className = "container">

            <div className = "row">
              <div className = "col">
                <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <h3 className = "text-center">Resultado de Serviço</h3>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "parametro"
                                label = "Parâmetro"
                                placeholder = "true"
                                setState = {this.setParametro}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "unidade"
                                label = "Unidade"
                                placeholder = "true"
                                setState = {this.setUnidade}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "faseA"
                                label = "Fase A"
                                placeholder = "true"
                                setState = {this.setFaseA}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "faseB"
                                label = "Fase B"
                                placeholder = "true"
                                setState = {this.setFaseB}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "faseC"
                                label = "Fase C"
                                placeholder = "true"
                                setState = {this.setFaseC}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "referencia"
                                label = "Referência"
                                placeholder = "true"
                                setState = {this.setReferencia}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-4 mb-2 text-center">
                <button type = "submit" className = "btn btn-primary">
                  Cadastrar
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}
