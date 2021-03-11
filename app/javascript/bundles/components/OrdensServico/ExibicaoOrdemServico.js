import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import "../../styles/Geral.css";
import logoVegoor from "../../img/vegoorFull.png";
import logoSf6 from "../../img/sf6SemFundo.png";

export default class ExibicaoOrdemServico extends React.Component {
  static propTypes = {
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      notificacoes: []
    }

    this.checkOrBox = this.checkOrBox.bind(this);
    this.exclui = this.exclui.bind(this);
    this.excluiResultado = this.excluiResultado.bind(this);
    this.cancela =  this.cancela.bind(this);
  }

  checkOrBox(verificacao){
    if(verificacao){
      return <i className = "fas fa-check"></i>;
    }

    return <i className = "far fa-square"></i>
  }

  async exclui(){
    let confirmacao = window.confirm("Deseja mesmo excluir?");

    if(confirmacao){
      let notificacoesNovas = [];
      let url = "/" + this.props.linkAcao + "/" + this.props.data.id;
      let response = await MyRequests.delete(url);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
      this.setState({notificacoes: notificacoesNovas});

      //Redireciona para a página de listagem
      //window.location.href = "/" + this.props.linkAcoes;
    }
  }

  async excluiResultado(id){
    let confirmacao = window.confirm("Deseja mesmo excluir o resultado?");

    if(confirmacao){
      let notificacoesNovas = [];
      let url = "/orderservice_reports/" + id;
      let response = await MyRequests.delete(url);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      if(response["code"] != 200){
        window.alert("Erro ao excluir resultado");
      }
      else{
        document.getElementById("result" + id).remove();
      }
    }
  }

  async cancela(){
    let confirmacao = window.confirm("Deseja mesmo Cancelar?");

    if(confirmacao){
      let notificacoesNovas = [];
      let url = "/orders/" + this.props.data.id + "/cancel_order";
      let response = await MyRequests.get(url);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
      this.setState({notificacoes: notificacoesNovas});
    }
  }

  render() {
    return (
      <div className = "container bg-white p-4">
        <div className =  "row">
          <div className = "col">
            <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>
          </div>
        </div>

        <div className = "row border-bottom border-dark">
          <div className = "col">

            <div className = "row">
              <div className = "col">
                <h4 className = "h4">
                  Ordem de Serviço #{this.props.contagem}
                </h4>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <span>
                  Data: {this.props.data.created_at}
                </span>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <span>
                  Situação: {this.props.data.status ? "Encerrada" : "Aberta"}
                </span>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <span>
                  {this.checkOrBox(this.props.data.laboratory)} Serviço de Laboratório
                </span>
              </div>
            </div>

            <div className = "row">
              <div className = "col">
                <span>
                {this.checkOrBox(this.props.data.field)} Serviço de Campo
                </span>
              </div>
            </div>

            <div className = "row mb-2">
              <div className = "col">
                <span>
                {this.checkOrBox(this.props.data.factory)} Serviço de Fábrica
                </span>
              </div>
            </div>

        </div>

        <div className = "col">
          <img className = "img-fluid float-right"
               width = "225px"
               height = "225px"
               src = {this.props.empresa == "Vegoor" ? logoVegoor : logoSf6}/>
        </div>
      </div>

      <div className = "row mt-2">
        <div className = "col">
          <span>
            Pela presente Ordem de serviço, objetivamos informar os trabalhadores que executam suas atividades laborais nesse setor, conforme estabelece a NR-1 , item 1.7, sobre as condições de segurança e saúde às quais estão expostos, como medida preventiva e ,tendo como parâmetro os agentes físicos, químicos, e biológicos citados na NR-9 - Programa de Prevenção de Riscos Ambientais(Lei nº 6514 de 22/12/1977,Portaria nº 3214 de 08/06/1978), bem como os procedimentos de aplicação da NR-6 - Equipamento de Proteção Individual – EPI , NR-17 – Ergonomia , de forma a padronizar comportamentos para prevenir acidentes e/ou doenças ocupacionais e NR-10 Segurança Em Instalações e Serviços em Eletricidade.
          </span>
        </div>
      </div>

      <div className = "row mt-4">
        <div className = "col">
          <span>
            <b>Descrição:</b>
          </span>
        </div>
      </div>
      <div className = "row">
        <div className = "col">
          <span>
            {this.props.data.description}
          </span>
        </div>
      </div>

      <div className = "row mt-2">
        <div className = "col">
          <span>
            <b>Local de Execução:</b>
          </span>
        </div>
      </div>
      <div className = "row">
        <div className = "col">
          <span>
            {this.props.data.location}
          </span>
        </div>
      </div>

      <div className = "row mt-2">
        <div className = "col">
          <span>
            <b>Observações:</b>
          </span>
        </div>
      </div>
      <div className = "row">
        <div className = "col">
          <span>
            {this.props.data.comments}
          </span>
        </div>
      </div>

      <div className = "row">
        <div className = "col mt-4">
          <table className = "table table-sm table-responsive">
            <thead className = "thead-light text-center">
              <tr>
                <th scope = "col">Cliente</th>
                <th scope = "col">CNPJ</th>
                <th scope = "col">Telefone</th>
                <th scope = "col">E-mail</th>
                <th scope = "col">Endereço</th>
                <th scope = "col">Cidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope = "col">
                  {this.props.cliente.razao_social}
                </td>
                <td scope = "col">
                  {this.props.cliente.cnpj}
                </td>
                <td scope = "col">
                  {this.props.cliente.phone}
                </td>
                <td scope = "col">
                  {this.props.cliente.email}
                </td>
                <td scope = "col">
                  {this.props.cliente.street + ", Nº: " + this.props.cliente.number}
                </td>
                <td scope = "col">
                  {this.props.cliente.city + "/" + this.props.cliente.state}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className = "row justify-content-left mt-2">
        <div className = "col-auto">
          <table className = "table table-sm table-responsive">
            <thead className = "thead-light text-center">
              <tr>
                <th scope = "col">Responsável Técnico</th>
                <th scope = "col">E-mail</th>
                <th scope = "col">Telefone</th>
                <th scope = "col">Matrícula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope = "col">
                  {this.props.responsavel.first_name + " " + this.props.responsavel.last_name}
                </td>
                <td scope = "col">
                  {this.props.responsavel.email}
                </td>
                <td scope = "col">
                  {this.props.responsavel.phone}
                </td>
                <td scope = "col">
                  {this.props.responsavel.registration}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className = "row justify-content-left mt-2">
        <div className = "col-auto">
          <table className = "table table-sm table-responsive">
            <thead className = "thead-light text-center">
              <tr>
                <th scope = "col">Responsável Cliente</th>
                <th scope = "col">E-mail</th>
                <th scope = "col">Telefone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope = "col">
                  {this.props.contato.first_name + " " + this.props.contato.last_name}
                </td>
                <td scope = "col">
                  {this.props.contato.email}
                </td>
                <td scope = "col">
                  {this.props.contato.phone}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className = "row justify-content-left mt-2">
        <div className = "col-auto">
          <table className = "table table-sm table-responsive">
            <thead>
              <tr className = "thead-light">
                <th scope = "col">
                  Serviços
                </th>
              </tr>
            </thead>
              {this.props.servicos.map((servico) => {
                return (
                  <tbody key = {"servico" + MyUtil.keyAleatoria()}>
                    <tr>
                      <td>
                        <table className = "table table-sm table-responsive">
                          <thead>
                            <tr className = "thead-dark">
                              <th scope = "col" colSpan = "8" className = "text-center">
                                Serviço {servico.nome}
                              </th>
                            </tr>
                          </thead>

                          <tbody className = "text-center">
                            <tr>
                              <th scope = "col">Nome</th>
                              <th scope = "col">Equipamento</th>
                              <th scope = "col">Série</th>
                              <th scope = "col">Status</th>
                              <th scope = "col" colSpan = "4" className = "text-center">Ações</th>
                            </tr>
                            <tr>
                              <td scope = "col">
                                {servico.nome}
                              </td>
                              <td scope = "col">
                                {servico.equipamento}
                              </td>
                              <td scope = "col">
                                {servico.serie}
                              </td>
                              <td scope = "col">
                                {servico.status ? "Finalizado em " + servico.dataAtualizacao : "Em Aberto"}
                              </td>
                              <td scope = "col" colSpan = "4" className = "text-center">
                                {!servico.status ? <a href = {"../orderservice_reports/new." + servico.id}>
                                                    <button type = "button" className = "btn btn-primary btn-sm">
                                                      Inserir Resultado
                                                    </button>
                                                   </a>
                                                 : ""}
                              </td>
                            </tr>

                            <tr>
                              <th scope = "col">Parâmetro</th>
                              <th scope = "col">Unidade</th>
                              <th scope = "col">Fase A</th>
                              <th scope = "col">Fase B</th>
                              <th scope = "col">Fase C</th>
                              <th scope = "col">Referência</th>
                              <th scope = "col" colSpan = "2" className = "text-center">Ações</th>
                            </tr>

                            {servico.relatorios.length > 0 ? servico.relatorios.map((relatorio) => {
                              return (
                                <tr id = {"result" + relatorio.id} key = {"relatorio" + MyUtil.keyAleatoria()}>
                                  <td>
                                    {relatorio.parameter}
                                  </td>
                                  <td>
                                    {relatorio.unity}
                                  </td>
                                  <td>
                                    {relatorio.fase_a}
                                  </td>
                                  <td>
                                    {relatorio.fase_b}
                                  </td>
                                  <td>
                                    {relatorio.fase_c}
                                  </td>
                                  <td>
                                    {relatorio.reference}
                                  </td>
                                  <td>
                                    <a href = {"/orderservice_reports/" + relatorio.id + "/edit"}>
                                      <button type = "button"
                                              className = "btn btn-primary btn-sm">
                                        Editar
                                      </button>
                                    </a>
                                  </td>
                                  <td>
                                    <button type = "button"
                                            className = "btn btn-danger btn-sm"
                                            onClick = {() => this.excluiResultado(relatorio.id)}>
                                      Excluir
                                    </button>
                                  </td>
                                </tr>
                              )
                            }) : null}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
          </table>
        </div>
      </div>

      <div className = "row justify-content-left mt-2">
        <div className = "col-auto">
          <table className = "table table-sm table-responsive">
            <thead className = "thead-light">
              <tr>
                <th scope = "col">
                  Equipamentos
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.equipamentos.map((equipamento) => {
                return (
                  <tr key = {"equipamento" + MyUtil.keyAleatoria()}>
                    <td scope = "col">
                      {equipamento.name}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className = "row justify-content-left mt-2">
        <div className = "col-auto">
          <table className = "table table-sm table-responsive">
            <thead>
              <tr className = "thead-light">
                <th scope = "col" colSpan = "2">
                  EPIs
                </th>
              </tr>
              <tr>
                <td scope = "col">
                  EPI
                </td>
                <td scope = "col">
                  Quantidade
                </td>
              </tr>
            </thead>
            <tbody>
              {this.props.epis.map((epi) => {
                return (
                  <tr key = {"epi" + MyUtil.keyAleatoria()}>
                    <td scope = "col">
                      {epi.nome}
                    </td>
                    <td scope = "col">
                      {epi.quantia}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className = "row">
        <div className = "col text-right">
          <button type = "button" className = "btn btn-sm btn-danger" onClick = {this.exclui}>
            Excluir
          </button>
          &nbsp;
          <button type = "button" className = "btn btn-sm btn-danger" onClick = {this.cancela}>
            Cancelar
          </button>
          &nbsp;
          <a className = "linkSemUnderline" href = {"/orders/" + this.props.data.id + "/close_order"}>
            <button type = "button" className = "btn btn-sm btn-success">
              <span className = "text-white">
                Fechar
              </span>
            </button>
          </a>
          &nbsp;
          <a className = "linkSemUnderline text-white" href = {"/" + this.props.linkAcao + "/" + this.props.data.id + "/edit"}>
            <button type = "button" className = "btn btn-sm btn-primary">
              Editar
            </button>
          </a>
        </div>
      </div>

    </div>
  );
  }
}
