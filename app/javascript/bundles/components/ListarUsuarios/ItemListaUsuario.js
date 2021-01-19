import PropTypes from "prop-types";
import React from "react";

export default class ItemListaUsuario extends React.Component {
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
          <th scope = "row">{this.props.idUsuario}</th>
          <td scope = "row">{this.props.nome + " " + this.props.sobrenome} </td>
          <td scope = "row">{this.props.email}</td>
          <td scope = "row">{this.props.telefone}</td>
          <td scope = "row">{this.props.funcao}</td>
          <td scope = "row">{this.props.administrador ? "Admin" : "Usuário"}</td>
          <td scope = "row">Visualizar</td>
          <td>Editar</td>
        </tr>
    );
  }
}
