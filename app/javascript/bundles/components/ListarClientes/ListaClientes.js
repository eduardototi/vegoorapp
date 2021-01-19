import PropTypes from "prop-types";
import React from "react";
import ItemListaCliente from "./ItemListaCliente";

export default class ListaClientes extends React.Component {
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

  createItems(client){
    return (
      <ItemListaCliente key = {"usuario" + client.id}
                        razaoSocial = {client.razao_social}
                        cnpj = {client.cnpj}
                        unidade = {client.unity}
                        endereco = {client.street + ", nº " + client.number}
                        telefone = {client.phone}
                        email = {client.email}/>
    )
  }

  render(){
    return (
      <div className = "table-responsive">
        <table className = "table text-center">
          <thead className = "table-dark table-bordered">
            <tr>
              <th scope = "col">Razão Social</th>
              <th scope = "col">CNPJ</th>
              <th scope = "col">Unidade</th>
              <th scope = "col">Endereço</th>
              <th scope = "col">Telefone</th>
              <th scope = "col">E-mail</th>
              <th colSpan = "2">Ações</th>
            </tr>
          </thead>
          <tbody className = "bg-light">
            {this.props.clientes.map((client) => {
              return this.createItems(client);
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
