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
        <tr>
          <th scope = "row">{this.props.idUsuario}</th>
          <td>{this.props.nome + " " + this.props.sobrenome} </td>
          <td>{this.props.email}</td>
          <td>{this.props.telefone}</td>
          <td>{this.props.funcao}</td>
          <td>{this.props.administrador ? "Admin" : "Usuário"}</td>
          <td>Visualizar</td>
          <td>Editar</td>
        </tr>
    );
  }
}
