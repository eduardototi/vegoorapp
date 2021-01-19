import PropTypes from "prop-types";
import React from "react";

export default class ItemListaCliente extends React.Component {
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
        <tr scope = "col">
          <td scope = "row">{this.props.razaoSocial} </td>
          <td scope = "row">{this.props.cnpj}</td>
          <td scope = "row">{this.props.unidade}</td>
          <td scope = "row">{this.props.endereco}</td>
          <td scope = "row">{this.props.telefone}</td>
          <td scope = "row">{this.props.email}</td>
          <td scope = "row">Visualizar</td>
          <td scope = "row">Editar</td>
        </tr>
    );
  }
}
