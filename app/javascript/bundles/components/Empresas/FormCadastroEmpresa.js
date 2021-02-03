import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEmail from "../Comum/Forms/CampoEmail";
import CampoTelefone from "../Comum/Forms/CampoTelefone";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormCadastroEmpresa extends React.Component {
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
      endereco: "",
      telefone: "",
      email: "",
      notificacoes: []
    };

    this.setNome = this.setNome.bind(this);
    this.setEndereco = this.setEndereco.bind(this);
    this.setTelefone = this.setTelefone.bind(this);
    this.setEmail = this.setEmail.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setNome(e){
    this.setState({nome: e.target.value});
  }

  setEndereco(e){
    this.setState({endereco: e.target.value});
  }

  setTelefone(e){
    this.setState({telefone: e.target.value});
  }

  setEmail(e){
    this.setState({email: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Nome", "Endereço", "Telefone", "E-mail"],
                                                   this.state);

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      let url = "/create_company";
      let payload = {"name": this.state.nome,
                     "addrees": this.state.endereco,
                     "phone": this.state.telefone,
                     "email": this.state.email};
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
                <h3 className = "text-center">Cadastro de Empresa</h3>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <CampoTexto id = "nome"
                            label = "Nome"
                            placeholder = "true"
                            value = {this.state.nome}
                            setState = {this.setNome}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "endereco"
                            label = "Endereço"
                            placeholder = "true"
                            value = {this.state.endereco}
                            setState = {this.setEndereco}/>
              </div>
              <div className = "col">
                <CampoTelefone id = "telefone"
                               label = "Telefone"
                               placeholder = "true"
                               value = {this.state.telefone}
                               setState = {this.setTelefone}/>
              </div>
              <div className = "col">
                <CampoEmail id = "email"
                            label = "E-mail"
                            placeholder = "true"
                            value = {this.state.email}
                            setState = {this.setEmail}/>
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
