import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormCadastroServico extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      servico: "",
      descricao: "",
      notificacoes: []
    };

    this.setServico = this.setServico.bind(this);
    this.setDescricao = this.setDescricao.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setServico(e){
    this.setState({servico: e.target.value});
  }

  setDescricao(e){
    this.setState({descricao: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Serviço", "Descrição"],
                                                   this.state);

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      let url = "/create_service";
      let payload = {"title": this.state.servico,
                     "description": this.state.descricao};
      let response = await MyRequests.post(url, payload);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render() {
    return (
      <div className = "bg-white">

        <form onSubmit = {this.handleSubmit} className = "mt-2">
          <div className = "container">

            <div className = "row">
              <div className = "col mt-2">
                <h3 className = "text-center">Cadastro de Serviço</h3>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <CampoTexto id = "servico"
                            label = "Serviço"
                            placeholder = "true"
                            value = {this.state.servico}
                            setState = {this.setServico}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoAreaTexto id = "descricao"
                                label = "Descrição"
                                placeholder = "true"
                                rows = "8"
                                value = {this.state.descricao}
                                setState = {this.setDescricao}/>
              </div>
            </div>

            <div className = "row mt-4 text-center">
              <div className = "col mb-2">
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
