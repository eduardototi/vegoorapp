import ReactOnRails from "react-on-rails";

//Comum
import Lista from "../bundles/components/Comum/Listas/Lista";
import ListaVisualizacao from "../bundles/components/Comum/Listas/ListaVisualizacao";
import Visualizacao from "../bundles/components/Comum/Visualizacao/Visualizacao";
import BarraSuperior from "../bundles/components/Comum/BarraSuperior/BarraSuperior";
//Usuários
import FormCadastroUsuario from "../bundles/components/Usuarios/FormCadastroUsuario";
import FormEdicaoUsuario from "../bundles/components/Usuarios/FormEdicaoUsuario";
//Clientes
import FormCadastroCliente from "../bundles/components/Clientes/FormCadastroCliente";
//Equipamentos
import FormCadastroEquipamento from "../bundles/components/Equipamentos/FormCadastroEquipamento";
//Máquinas
import FormCadastroMaquina from "../bundles/components/Maquinas/FormCadastroMaquina";
//EPIs
import FormCadastroEpi from "../bundles/components/Epis/FormCadastroEpi";
//Serviços
import FormCadastroServico from "../bundles/components/Servicos/FormCadastroServico";
//Ordens de Serviço
import FormCadastroOrdensServico from "../bundles/components/OrdensServico/FormCadastroOrdensServico";

ReactOnRails.register({
  Lista,
  ListaVisualizacao,
  Visualizacao,
  BarraSuperior,
  FormCadastroUsuario,
  FormEdicaoUsuario,
  FormCadastroCliente,
  FormCadastroEquipamento,
  FormCadastroMaquina,
  FormCadastroEpi,
  FormCadastroServico,
  FormCadastroOrdensServico
});
