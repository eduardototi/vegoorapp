import PropTypes from "prop-types";
import React from "react";
import ItemNavBar from "./ItemNavBar";
import "../../styles/BarraSuperior.css";

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
  }

  collapse(){
    //Mostra/esconde a nav bar de forma vertical
    //A navbar "fica vertical" quando em dispositivos móveis ou
    //a resolução do navegador atual é uma resolução específica
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  }

  render() {
    return (
      <div>
        <nav className = "navbar navbar-expand-md fixed-top navbar-dark bg-dark" aria-label = "Main navigation">
          <div className = "container-fluid">
            <a className = "navbar-brand">
              <i className = "fa fa-home homeIcon"></i>
            </a>

            <button className = "navbar-toggler p-0 border-0" type = "button" data-bs-toggle = "offcanvas" aria-label = "Toggle navigation" onClick = {this.collapse}>
              <span className = "navbar-toggler-icon"></span>
            </button>

            <div className = "navbar-collapse offcanvas-collapse" id = "navbarsExampleDefault">
              <ul className = "navbar-nav mr-auto ">
                <ItemNavBar titulo = "Usuários"
                            subitems = {["Novo", "Listar"]}
                            links = {["", ""]}/>

                <ItemNavBar titulo = "Clientes"
                            subitems = {["Novo", "Listar"]}
                            links = {["", ""]}/>

                <ItemNavBar titulo = "Equipamentos"
                            subitems = {["Novo Equipamento", "Listar Equipamentos", "Nova Máquina", "Listar Máquinas", "Novo Epi", "Listar Epis"]}
                            links = {["", "", "", "", "", ""]}/>

                <ItemNavBar titulo = "Serviços"
                            subitems = {["Novo", "Listar"]}
                            links = {["", ""]}/>

                <ItemNavBar titulo = "Ordens de Serviço"
                            subitems = {["Nova OS Vegoor", "Listar OS Vegoor", "Nova OS SF6", "Listar OS SF6"]}
                            links = {["", "", "", ""]}/>

              </ul>

                <button className = "btn btn-outline-danger">
                    Sair
                </button>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

/*
<%= link_to 'Novo', new_user_path, class: "dropdown-item text-light" %>
<%= link_to 'Listar', users_path, class: "dropdown-item text-light" %
*/
