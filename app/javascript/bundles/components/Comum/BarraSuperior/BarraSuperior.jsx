import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";
import ItemNavBar from "./ItemNavBar";
import "./Style.css";
import MyRequests from "../../../util/MyRequests";

export default class BarraSuperior extends React.Component {
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

    this.collapse = this.collapse.bind(this);
    this.desloga = this.desloga.bind(this);
  }

  collapse(){
    //Mostra/esconde a nav bar de forma vertical
    //A navbar "fica vertical" quando em dispositivos móveis ou
    //a resolução do navegador atual é uma resolução específica
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  }

  async desloga(){
    let url = "/users/sign_out";
    await MyRequests.delete(url);

    //Redireciona o usuário para recarregar a página e mostrar a tela de login
    window.location.href = "/";
  }

  render() {
    return (
      <div className = "disabledTextSelection">
        <nav className = "navbar navbar-expand-md fixed-top navbar-dark bg-dark" aria-label = "Main navigation">
          <div className = "container-fluid">
            <a className = "navbar-brand" href = "/">
              <i className = "fa fa-home homeIcon"></i>
            </a>

            <button className = "navbar-toggler p-0 border-0" type = "button" data-bs-toggle = "offcanvas" aria-label = "Toggle navigation" onClick = {this.collapse}>
              <span className = "navbar-toggler-icon"></span>
            </button>

            <div className = "navbar-collapse offcanvas-collapse" id = "navbarsExampleDefault">
              <ul className = "navbar-nav mr-auto ">
                <ItemNavBar titulo = "Usuários"
                            subitems = {[["Novo", "/users/new"], ["Listar", "/users"]]}/>

                <ItemNavBar titulo = "Atores"
                            subitems = {[["Novo Cliente", "/clients/new"], ["Listar Clientes", "/clients"],
                                         ["Nova Empresa", "/companies/new"], ["Listar Empresas", "/companies"]]}/>

                <ItemNavBar titulo = "Equipamentos"
                            subitems = {[["Novo Equipamento", "/utensils/new"],
                                        ["Listar Equipamentos", "/utensils"],
                                        ["Nova Máquina", "/machines/new"],
                                        ["Listar Máquinas", "/machines"],
                                        ["Novo Epi", "/epis/new"],
                                        ["Listar Epis", "/epis"]]}/>

                <ItemNavBar titulo = "Serviços"
                            subitems = {[["Novo", "/services/new"], ["Listar", "/services"]]}/>

                <ItemNavBar titulo = "Ordens de Serviço"
                            subitems = {[["Nova", "/orders/new"], ["Listar", "/orders"], ["Canceladas", "/canceled_orders"]]}/>

                <ItemNavBar titulo = "Laudos"
                            subitems = {[["Listar", "/reports"]]}/>
              </ul>

                <span className = "text-white mr-2">
                  Bem-vindo, {this.props.usuarioAtual}
                </span>

                <button type = "button" className = "btn btn-outline-danger" onClick = {this.desloga}>
                  Sair
                </button>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}
