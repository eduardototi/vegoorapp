import PropTypes from "prop-types";
import React from "react";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormEdicaoRelatorioOrdemServico extends React.Component {
  static propTypes = {

  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.data.id,
      idOrdem: this.props.idOrdem,
      parametro: this.props.data.parameter,
      unidade: this.props.data.unity,
      faseA: this.props.data.fase_a,
      faseB: this.props.data.fase_b,
      faseC: this.props.data.fase_c,
      referencia: this.props.data.reference,
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

    /*
    Parameters: {"authenticity_token"=>"5vArMbSB6tzMFHcv7hz7Xy9a1lw52MVBTlq5S4Mr6c2NVhlf9SNHf71ptuE24pYsiJPzZbaXn+kZ1x36eXcJOw==",
    "orderservice_report"=>
    {"parameter"=>"", "unity"=>"", "fase_a"=>"", "fase_b"=>"", "fase_c"=>"", "reference"=>"", "orderservice_id"=>"2"},
    "commit"=>"Enviar", "id"=>"2"}
    */

    //Cria a url do request
    let url = "/update_order_service";
    let payload = {"id": this.state.id,
                   "parameter": this.state.parametro,
                   "unity": this.state.unidade,
                   "fase_a": this.state.faseA,
                   "fase_b": this.state.faseB,
                   "fase_c": this.state.faseC,
                   "reference": this.state.referencia,
                   "orderservice_id": this.state.idOrdem};
    let response = await MyRequests.put(url, payload);

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
                <h3 className = "text-center">Edição de Resultado de Serviço</h3>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "parametro"
                                label = "Parâmetro"
                                placeholder = "true"
                                value = {this.state.parametro}
                                setState = {this.setParametro}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "unidade"
                                label = "Unidade"
                                placeholder = "true"
                                value = {this.state.unidade}
                                setState = {this.setUnidade}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "faseA"
                                label = "Fase A"
                                placeholder = "true"
                                value = {this.state.faseA}
                                setState = {this.setFaseA}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "faseB"
                                label = "Fase B"
                                placeholder = "true"
                                value = {this.state.faseB}
                                setState = {this.setFaseB}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "faseC"
                                label = "Fase C"
                                placeholder = "true"
                                value = {this.state.faseC}
                                setState = {this.setFaseC}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-2">
                <CampoAreaTexto id = "referencia"
                                label = "Referência"
                                placeholder = "true"
                                value = {this.state.referencia}
                                setState = {this.setReferencia}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col mt-4 mb-2 text-center">
                <button type = "submit" className = "btn btn-primary">
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
