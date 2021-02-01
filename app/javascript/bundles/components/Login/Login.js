import PropTypes from "prop-types";
import React from "react";
import CampoEmail from "../Comum/Forms/CampoEmail";
import CampoSenha from "../Comum/Forms/CampoSenha";
import CampoEscolha from "../Comum/Forms/CampoEscolha";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";
import logoVegoor from "../../img/vegoorFull.png";
import logoSf6 from "../../img/sf6SemFundo.png";
import "./Style.css";

export default class Login extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      lembrar: false,
      notificacoes: []
    }

    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
    this.setLembrar = this.setLembrar.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setEmail(e){
    this.setState({email: e.target.value});
  }

  setSenha(e){
    this.setState({senha: e.target.value});
  }

  setLembrar(e){
    this.setState({lembrar: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Email", "Senha"],
                                                   {"email": this.state.email,
                                                    "senha": this.state.senha});

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      let url = "/users/sign_in";
      let payload = {"user": {"email": this.state.email,
                              "password": this.state.senha,
                              "remember_me": this.state.lembrar ? 1 : 0}};
      let response = await MyRequests.post(url, payload);

      //Redireciona o usuário para recarregar a página e mostrar a tela inicial
      window.location.href = "/";
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render() {
    return (
      <div className = "container bg-white shadow-lg rounded-lg p-5 login login-mobile">
        <div className = "row text-left">
          <div className = "col">
            <h4 className = "h4">
              LOGIN
            </h4>
            <span>
              Bem-vindo ao sistema
            </span>
          </div>
        </div>

        <div className = "row">
          <div className = "col mt-2">
            <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>
          </div>
        </div>

        <form onSubmit = {this.handleSubmit}>
          <div className = "row">
            <div className = "col mt-5 input-com-icone">
              <i className = "fa fa-envelope bg-dark text-white icone"></i>
              <input className = "form-control input" type = "email" placeholder = "E-mail" onChange = {this.setEmail}/>
            </div>
          </div>

          <div className = "row">
            <div className = "col mt-3 input-com-icone">
              <i className = "fa fa-lock bg-dark text-white icone"></i>
              <input className = "form-control input" type = "password" placeholder = "Senha" onChange = {this.setSenha}/>
            </div>
          </div>

          <div className = "row semSelecao">
            <div className = "col mt-2 ml-4">
              <input className = "form-check-input" type = "checkbox" value = "true" onChange = {this.setLembrar}/>
              <label className = "form-check-label">
                Lembrar-me
              </label>
            </div>
          </div>

          <div className = "row">
            <div className = "col text-center mt-4 mb-2">
              <button type = "submit" className = "btn btn w-100 btn-secondary">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
