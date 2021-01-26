import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormCadastroMaquina extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      serie: "",
      ativo: false,
      notificacoes: []
    };

    this.setNome = this.setNome.bind(this);
    this.setSerie = this.setSerie.bind(this);
    this.setAtivo = this.setAtivo.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setNome(e){
    this.setState({nome: e.target.value});
  }

  setSerie(e){
    this.setState({serie: e.target.value});
  }

  setAtivo(e){
    this.setState({ativo: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Nome", "Série", "Ativo"],
                                                   this.state);

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      let url = "/create_machine";
      let payload = {"name": this.state.nome,
                     "description": this.state.serie,
                     "status": this.state.ativo};
      let response = await MyRequests.post(url, payload);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
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
            <div className = "row">
              <div className = "col">
                <CampoTexto id = "nome"
                            label = "Nome"
                            placeholder = "true"
                            value = {this.state.nome}
                            setState = {this.setNome}/>
              </div>
              <div className = "col">
                <CampoTexto id = "serie"
                            label = "Série"
                            placeholder = "true"
                            value = {this.state.serie}
                            setState = {this.setSerie}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoMultiplaEscolha id = "ativo"
                                      label = "Ativo"
                                      opc = {[["Sim", true], ["Não", false]]}
                                      selecionado = {this.state.ativo}
                                      setState = {this.setAtivo}/>
              </div>
            </div>

            <div className = "row mt-4 text-center">
              <div className = "col">
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
