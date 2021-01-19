import ReactOnRails from "react-on-rails";

import BarraSuperior from "../bundles/components/Comum/BarraSuperior/BarraSuperior";
import FormCadastroUsuario from "../bundles/components/Usuarios/FormCadastroUsuario";
import FormCadastroCliente from "../bundles/components/Clientes/FormCadastroCliente";
import CabecalhoLista from "../bundles/components/Comum/Listas/CabecalhoLista";
import Lista from "../bundles/components/Comum/Listas/Lista";

ReactOnRails.register({
  BarraSuperior,
  FormCadastroUsuario,
  FormCadastroCliente,
  CabecalhoLista,
  Lista
});
