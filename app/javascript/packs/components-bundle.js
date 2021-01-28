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
import FormEdicaoCliente from "../bundles/components/Clientes/FormEdicaoCliente";
//Equipamentos
import FormCadastroEquipamento from "../bundles/components/Equipamentos/FormCadastroEquipamento";
import FormEdicaoEquipamento from "../bundles/components/Equipamentos/FormEdicaoEquipamento";
//Máquinas
import FormCadastroMaquina from "../bundles/components/Maquinas/FormCadastroMaquina";
import FormEdicaoMaquina from "../bundles/components/Maquinas/FormEdicaoMaquina";
//EPIs
import FormCadastroEpi from "../bundles/components/Epis/FormCadastroEpi";
import FormEdicaoEpi from "../bundles/components/Epis/FormEdicaoEpi";
//Serviços
import FormCadastroServico from "../bundles/components/Servicos/FormCadastroServico";
import FormEdicaoServico from "../bundles/components/Servicos/FormEdicaoServico";
//Ordens de Serviço
import ListaOrdemServico from "../bundles/components/OrdensServico/ListaOrdemServico";
import FormCadastroOrdemServico from "../bundles/components/OrdensServico/FormCadastroOrdemServico";
import FormEdicaoOrdemServico from "../bundles/components/OrdensServico/FormEdicaoOrdemServico";
import ExibicaoOrdemServico from "../bundles/components/OrdensServico/ExibicaoOrdemServico";

ReactOnRails.register({
  Lista,
  ListaVisualizacao,
  Visualizacao,
  BarraSuperior,
  FormCadastroUsuario,
  FormEdicaoUsuario,
  FormCadastroCliente,
  FormEdicaoCliente,
  FormCadastroEquipamento,
  FormEdicaoEquipamento,
  FormCadastroMaquina,
  FormEdicaoMaquina,
  FormCadastroEpi,
  FormEdicaoEpi,
  FormCadastroServico,
  FormEdicaoServico,
  ListaOrdemServico,
  FormCadastroOrdemServico,
  FormEdicaoOrdemServico,
  ExibicaoOrdemServico
});
