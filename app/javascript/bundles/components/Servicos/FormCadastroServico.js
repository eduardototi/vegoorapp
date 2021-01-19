import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";

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
      descricao: ""
    };

    this.setServico = this.setServico.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
  }

  setServico(e){
    this.setState({servico: e.target.value});
  }

  setDescricao(e){
    this.setState({descricao: e.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <div className = "container">
            <div className = "row">
              <div className = "col">
                <CampoTexto id = "servico"
                            label = "Serviço"
                            placeholder = "true"
                            setState = {this.setServico}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoAreaTexto id = "descricao"
                                label = "Descrição"
                                placeholder = "true"
                                rows = "8"
                                setState = {this.setDescricao}/>
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
