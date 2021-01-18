import PropTypes from "prop-types";
import React from "react";

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
                <label htmlFor = "nome">
                  Nome
                </label>
                <input id = "nome" type = "text" className = "form-control" placeholder = "Nome" onChange = {this.setNome} required/>
              </div>

              <div className = "col">
                <label htmlFor = "sobrenome">
                  Sobrenome
                </label>
                <input id = "sobrenome" type = "text" className = "form-control" placeholder = "Sobrenome" onChange = {this.setSobrenome} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "matricula">
                  Matrícula
                </label>
                <input id = "matricula" type = "text" className = "form-control" placeholder = "Matrícula" pattern = "[0-9]{6}" onChange = {this.setMatricula} required/>
              </div>
              <div className = "col">
                <label>
                  Administrador
                </label><br/>

                <div className = "mt-2">
                  <input id = "admSim" name = "administrador" type = "radio" value = "true" onChange = {this.setAdministrador} required/>
                  <label htmlFor = "admSim">
                    Sim
                  </label>&nbsp;

                  <input id = "admNao" name = "administrador" type = "radio" value = "false" onChange = {this.setAdministrador} required/>
                  <label htmlFor = "admNao">
                    Não
                  </label>
                </div>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "funcao">
                  Função
                </label>
                <select id = "funcao" className = "form-control" onChange = {this.setFuncao} required>
                  <option defaultValue>Selecione...</option>
                  <option>Cliente</option>
                </select>
              </div>

              <div className = "col">
                <label htmlFor = "cliente">
                  Cliente
                </label>
                <select id = "cliente" className = "form-control" onChange = {this.setCliente} required>
                  <option defaultValue>Selecione...</option>
                  <option>Vegoor</option>
                </select>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "email">
                  E-mail
                </label>
                <input id = "email" type = "email" className = "form-control" placeholder = "E-mail" onChange = {this.setEmail} required/>
              </div>

              <div className = "col">
                <label htmlFor = "telefone">
                  Telefone
                </label>
                <input id = "telefone" type = "text" className = "form-control" placeholder = "Telefone" pattern = "[0-9]{8,9}" onChange = {this.setTelefone} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "senha">
                  Senha
                </label>
                <input id = "senha" type = "password" className = "form-control" placeholder = "Senha" onChange = {this.setSenha} required/>
              </div>

              <div className = "col">
                <label htmlFor = "senhaConf">
                  Confirme a Senha
                </label>
                <input id = "senhaConf" type = "password" className = "form-control" placeholder = "Confirme a senha" onChange = {this.setSenhaConf} required/>
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
