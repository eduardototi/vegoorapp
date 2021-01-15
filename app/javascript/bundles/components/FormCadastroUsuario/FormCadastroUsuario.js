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
      //name: this.props.name
    };
  }


  render() {
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "col">
              <label htmlFor = "nome">
                Nome
              </label>
              <input id = "nome" type = "text" className = "form-control" placeholder = "Nome"/>
            </div>
            
            <div className = "col">
              <label htmlFor = "sobrenome">
                Sobrenome
              </label>
              <input id = "sobrenome" type = "text" className = "form-control" placeholder = "Sobrenome"/>
            </div>
          </div>

          <div className = "row mt-2">
            <div className = "col">
              <label htmlFor = "matricula">
                Matrícula
              </label>
              <input id = "matricula" type = "text" className = "form-control" placeholder = "Matrícula" pattern = "[0-9]{6}"/>
            </div>
            <div className = "col">
              <label>
                Administrador
              </label><br/>

              <div className = "mt-2">
                <input id = "admSim" name = "administrador" type = "radio" value = "true"/>
                <label htmlFor = "admSim">
                  Sim
                </label>&nbsp;

                <input id = "admNao" name = "administrador" type = "radio" value = "false"/>
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
              <select id = "funcao" className = "form-control">
                <option defaultValue>Selecione...</option>
                <option>Cliente</option>
              </select>
            </div>

            <div className = "col">
              <label htmlFor = "cliente">
                Cliente
              </label>
              <select id = "cliente" className = "form-control">
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
              <input id = "email" type = "email" className = "form-control" placeholder = "E-mail"/>
            </div>

            <div className = "col">
              <label htmlFor = "telefone">
                Telefone
              </label>
              <input id = "telefone" type = "text" className = "form-control" placeholder = "Telefone" pattern = "[0-9]{8,9}"/>
            </div>
          </div>

          <div className = "row mt-2">
            <div className = "col">
              <label htmlFor = "senha">
                Senha
              </label>
              <input id = "senha" type = "password" className = "form-control" placeholder = "Senha"/>
            </div>

            <div className = "col">
              <label htmlFor = "senhaConf">
                Confirme a Senha
              </label>
              <input id = "senhaConf" type = "password" className = "form-control" placeholder = "Confirme a senha"/>
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
      </div>
    );
  }
}
