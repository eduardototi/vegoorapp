import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";

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
      ativo: ""
    };

    this.setNome = this.setNome.bind(this);
    this.setAtivo = this.setAtivo.bind(this);
  }

  setNome(e){
    this.setState({nome: e.target.value});
  }

  setAtivo(e){
    this.setState({ativo: e.target.value});
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
                <CampoMultiplaEscolha id = "ativo"
                                      label = "Ativo"
                                      opc = {[["Sim", true], ["Não", false]]}
                                      setState = {this.setAtivo}/>
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
