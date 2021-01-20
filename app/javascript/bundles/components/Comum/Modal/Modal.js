import PropTypes from "prop-types";
import React from "react";
import "./Panel.css";
import "../../../styles/Geral.css";

export default class Modal extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    campos: PropTypes.array.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {

    };

    this.esconde = this.esconde.bind(this);
  }

  esconde(){
    //Deixa o panel invisível
    document.getElementById(this.props.id).style.display = "none";
  }

  render() {
    return (
      <div id = {this.props.id} className = "modal">
        <div className = "container conteudoModal">
          <div className = "row">
            <div className = "col">
              <h5 className = "h5">
                {this.props.titulo}
              </h5>
            </div>
          </div>

          {this.props.campos.map((campo) => {
            return (
              <div key = {"key" + campo[0].key} className = "row mt-2">
                <div className = "col">
                  {campo}
                </div>
              </div>
            )
          })}
          <div className = "row mt-4 text-center">
            <div className = "col">
              <button type = "button" className = "btn btn-success btn-sm" onClick = {this.props.novoItem}>
                Adicionar
              </button>
            </div>
            <div className = "col">
              <button type = "button" className = "btn btn-danger btn-sm" onClick = {this.esconde}>
                Cancelar
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
