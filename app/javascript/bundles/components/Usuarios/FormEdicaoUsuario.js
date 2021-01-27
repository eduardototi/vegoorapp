import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEmail from "../Comum/Forms/CampoEmail";
import CampoSenha from "../Comum/Forms/CampoSenha";
import CampoTelefone from "../Comum/Forms/CampoTelefone";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormEdicaoUsuario extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.data.id,
      nome: this.props.data.first_name,
      sobrenome: this.props.data.last_name,
      matricula: this.props.data.registration,
      administrador: this.props.data.admin,
      funcao: this.props.data.role,
      cliente: this.props.data.client_id,
      email: this.props.data.email,
      telefone: this.props.data.phone,
      senha: "",
      senhaConf: "",
      notificacoes: []
    };

    this.setNome = this.setNome.bind(this);
    this.setSobrenome = this.setSobrenome.bind(this);
    this.setMatricula = this.setMatricula.bind(this);
    this.setAdministrador = this.setAdministrador.bind(this);
    this.setFuncao = this.setFuncao.bind(this);
    this.setCliente = this.setCliente.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setTelefone = this.setTelefone.bind(this);
    this.setSenha = this.setSenha.bind(this);
    this.setSenhaConf = this.setSenhaConf.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setNome(e){
    this.setState({nome: e.target.value});
  }

  setSobrenome(e){
    this.setState({sobrenome: e.target.value});
  }

  setMatricula(e){
    this.setState({matricula: e.target.value});
  }

  setAdministrador(e){
    this.setState({administrador: e.target.value});
  }

  setFuncao(e){
    this.setState({funcao: e.target.value});
  }

  setCliente(e){
    this.setState({cliente: e.target.value});
  }

  setEmail(e){
    this.setState({email: e.target.value});
  }

  setTelefone(e){
    this.setState({telefone: e.target.value});
  }

  setSenha(e){
    this.setState({senha: e.target.value});
  }

  setSenhaConf(e){
    this.setState({senhaConf: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();
    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Nome", "Sobrenome", "Matrícula", "Administrador",
                                                    "Função", "Cliente", "E-mail", "Telefone", "Senha", "Confirme a Senha"],
                                                   this.state);

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      if(this.state.senha == this.state.senhaConf){
        let url = "/create_user";
        let payload = {"first_name": this.state.nome,
                       "last_name": this.state.sobrenome,
                       "admin": this.state.administrador === "true" ? true : false,
                       "email": this.state.email,
                       "phone": this.state.telefone,
                       "client_id": parseInt(this.state.cliente),
                       "role": this.state.funcao,
                       "password": this.state.senha,
                       "password_confirmation": this.state.senhaConf};
        let response = await MyRequests.post(url, payload);
        let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

        console.log(response);

        notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
      }
      else{
        notificacoesNovas.push(<Notificacao tipo = "erro" msg = "As senhas não conferem"/>);
      }
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render(){
    return (
      <div className = "container bg-light">
        <form>
          <div className = "container">

            <div className = "row">
              <div className = "col mt-2">
                <h3 className = "text-center">Edição de Usuário</h3>
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
              <div className = "col">
                <CampoTexto id = "sobrenome"
                            label = "Sobrenome"
                            placeholder = "true"
                            value = {this.state.sobrenome}
                            setState = {this.setSobrenome}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "matricula"
                            label = "Matrícula"
                            placeholder = "true"
                            pattern = "[0-9]{6}"
                            value = {this.state.matricula}
                            setState = {this.setMatricula}/>
              </div>
              <div className = "col">
                <CampoMultiplaEscolha id = "administrador"
                                      label = "Administrador"
                                      selecionado = {true}
                                      opc = {[["Sim", true], ["Não", false]]}
                                      setState = {this.setAdministrador}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoDropdown id = "funcao"
                               label = "Função"
                               opc = {this.props.funcoes}
                               selecionado = {this.state.funcao}
                               setState = {this.setFuncao}/>
              </div>
              <div className = "col">
                <CampoDropdown id = "cliente"
                               label = "Cliente"
                               opc = {this.props.clientes}
                               selecionado = {this.state.cliente}
                               setState = {this.setCliente}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoEmail id = "email"
                            label = "E-mail"
                            placeholder = "true"
                            value = {this.state.email}
                            setState = {this.setEmail}/>
              </div>
              <div className = "col">
                <CampoTelefone id = "telefone"
                               label = "Telefone"
                               placeholder = "true"
                               value = {this.state.telefone}
                               setState = {this.setTelefone}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoSenha id = "senha"
                            label = "Senha"
                            placeholder = "true"
                            setState = {this.setSenha}/>
              </div>
              <div className = "col">
                <CampoSenha id = "senhaConf"
                            label = "Confirme a Senha"
                            placeholder = "true"
                            setState = {this.setSenhaConf}/>
              </div>
            </div>

            <div className = "row mt-4 text-center">
              <div className = "col mb-2">
                <button type = "button" className = "btn btn-primary">
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
