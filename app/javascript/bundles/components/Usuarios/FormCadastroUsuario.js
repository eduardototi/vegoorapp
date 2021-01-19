import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEmail from "../Comum/Forms/CampoEmail";
import CampoSenha from "../Comum/Forms/CampoSenha";
import CampoTelefone from "../Comum/Forms/CampoTelefone";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";

export default class FormCadastroUsuario extends React.Component {
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
      sobrenome: "",
      matricula: "",
      administrador: "",
      funcao: "",
      cliente: "",
      email: "",
      telefone: "",
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

  render() {
    return (
      <div>
        <form>
          <div className = "container">
            <div className = "row">
              <div className = "col">
                <CampoTexto id = "nome"
                            label = "Nome"
                            placeholder = "true"
                            setState = {this.setNome}/>
              </div>
              <div className = "col">
                <CampoTexto id = "sobrenome"
                            label = "Sobrenome"
                            placeholder = "true"
                            setState = {this.setSobrenome}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "matricula"
                            label = "Matrícula"
                            placeholder = "true"
                            pattern = "[0-9]{6}"
                            setState = {this.setMatricula}/>
              </div>
              <div className = "col">
                <CampoMultiplaEscolha id = "administrador"
                                      label = "Administrador"
                                      opc = {[["Sim", "true"], ["Não", "false"]]}
                                      setState = {this.setAdministrador}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoDropdown id = "funcao"
                               label = "Função"
                               opc = {[["Cliente", "1"], ["Funcionário", "2"]]}
                               selecionado = "Selecione..."
                               setState = {this.setFuncao}/>
              </div>
              <div className = "col">
                <CampoDropdown id = "cliente"
                               label = "Cliente"
                               opc = {[["Vegoor", "1"], ["SF6", "2"]]}
                               selecionado = "Selecione..."
                               setState = {this.setCliente}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoEmail id = "email"
                            label = "E-mail"
                            placeholder = "true"
                            setState = {this.setEmail}/>
              </div>
              <div className = "col">
                <CampoTelefone id = "telefone"
                               label = "Telefone"
                               placeholder = "true"
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
