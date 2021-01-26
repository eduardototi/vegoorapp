import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEmail from "../Comum/Forms/CampoEmail";
import CampoSenha from "../Comum/Forms/CampoSenha";
import CampoTelefone from "../Comum/Forms/CampoTelefone";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";

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
      nome: this.props.data.first_name,
      sobrenome: this.props.data.last_name,
      matricula: this.props.data.registration,
      administrador: this.props.data.admin,
      funcao: this.props.data.role,
      cliente: this.props.data.client_id,
      email: this.props.data.email,
      telefone: this.props.data.phone,
      senha: "",
      senhaConf: ""
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

  render(){
    return (
      <div>
        <form>
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
              <div className = "col">
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
