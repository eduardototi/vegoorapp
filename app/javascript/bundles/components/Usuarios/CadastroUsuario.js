import PropTypes from "prop-types";
import React from "react";
import FormCadastroUsuario from "./FormCadastroUsuario";

export default class CadastroUsuario extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="container-form bg-light">
            <h3 class="text-center">Cadastro de Usuário</h3>
            <FormCadastroUsuario/>
          </div>
        </div>
      </div>
    );
  }
}
