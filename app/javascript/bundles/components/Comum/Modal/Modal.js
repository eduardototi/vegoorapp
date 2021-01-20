import PropTypes from "prop-types";
import React from "react";
import PanelAdicao from "./PanelAdicao";
import "./Panel.css";
import "../../../styles/Geral.css";

export default class Modal extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    idModal: PropTypes.string.isRequired,
    idAdicaoItens: PropTypes.string.isRequired,
    campos: PropTypes.array.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id = {this.props.id}>
        <PanelAdicao id = {this.props.idModal}
                     idAdicaoItens = {this.props.idAdicaoItens}
                     titulo = {this.props.titulo}
                     campos = {this.props.campos}/>

        <div id = {this.props.idAdicaoItens}>
        </div>
      </div>
    );
  }
}
