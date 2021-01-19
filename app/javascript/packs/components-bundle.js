import ReactOnRails from "react-on-rails";

import BarraSuperior from "../bundles/components/BarraSuperior/BarraSuperior";
import FormCadastroUsuario from "../bundles/components/CadastrarUsuarios/FormCadastroUsuario";
import ListaUsuarios from "../bundles/components/ListarUsuarios/ListaUsuarios";
import FormCadastroCliente from "../bundles/components/CadastrarClientes/FormCadastroCliente";
import ListaClientes from "../bundles/components/ListarClientes/ListaClientes";
import CabecalhoLista from "../bundles/components/Comum/CabecalhoLista";
import Lista from "../bundles/components/Comum/Lista";

ReactOnRails.register({
  BarraSuperior,
  FormCadastroUsuario,
  ListaUsuarios,
  FormCadastroCliente,
  ListaClientes,
  CabecalhoLista,
  Lista
});
