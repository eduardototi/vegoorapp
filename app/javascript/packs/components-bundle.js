import ReactOnRails from "react-on-rails";


import Lista from "../bundles/components/Comum/Listas/Lista";
import BarraSuperior from "../bundles/components/Comum/BarraSuperior/BarraSuperior";
import FormCadastroUsuario from "../bundles/components/Usuarios/FormCadastroUsuario";
import FormCadastroCliente from "../bundles/components/Clientes/FormCadastroCliente";
import FormCadastroEquipamento from "../bundles/components/Equipamentos/FormCadastroEquipamento";
import FormCadastroMaquina from "../bundles/components/Maquinas/FormCadastroMaquina";
import FormCadastroEpi from "../bundles/components/Epis/FormCadastroEpi";
import FormCadastroServico from "../bundles/components/Servicos/FormCadastroServico";
import FormCadastroOrdensServico from "../bundles/components/OrdensServico/FormCadastroOrdensServico";

ReactOnRails.register({
  Lista,
  BarraSuperior,
  FormCadastroUsuario,
  FormCadastroCliente,
  FormCadastroEquipamento,
  FormCadastroMaquina,
  FormCadastroEpi,
  FormCadastroServico,
  FormCadastroOrdensServico
});
