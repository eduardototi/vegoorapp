import PropTypes from "prop-types";
import React from "react";
import ItemListaUsuario from "./ItemListaUsuario";

export default class ListaUsuarios extends React.Component {
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

  createItems(user){
    return (
      <ItemListaUsuario key = {"usuario" + user.id}
                        idUsuario = {user.id}
                        nome = {user.first_name}
                        sobrenome = {user.last_name}
                        email = {user.email}
                        telefone = {user.phone}
                        funcao = {user.role}
                        administrador = {user.admin}/>
    )
  }

  render(){
    return (
      <div>
        <table className = "table text-center">
          <thead className = "table-dark table-bordered">
            <tr>
              <th scope = "col">Id</th>
              <th scope = "col">Nome</th>
              <th scope = "col">Email</th>
              <th scope = "col">Telefone</th>
              <th scope = "col">Função</th>
              <th scope = "col">Administrador</th>
              <th colSpan = "2">Ações</th>
            </tr>
          </thead>
          <tbody className = "bg-light">
            {this.props.users.map((user) => {
              return this.createItems(user);
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
