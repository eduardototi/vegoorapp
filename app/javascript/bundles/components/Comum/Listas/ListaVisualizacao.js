import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../../util/MyUtil";
import MyParser from "../../../util/MyParser";

export default class ListaVisualizacao extends React.Component {
  static propTypes = {
    cabecalho: PropTypes.array.isRequired,
    colunas: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      dataConv: [],
      dadosTrocados: []
    }

    this.convData();
    this.substituiValores();

    this.exclui = this.exclui.bind(this);
  }

  //Converte o prop data de objeto para um dicionário
  convData(){
    let dataConv = [];

    for(let i in this.props.data){
      dataConv.push(this.props.data[i]);
    }

    this.state.dataConv = dataConv;
  }

  substituiValores(){
    //Armazena uma cópia para alterar os dados a serem substituidos no prop "colunas"
    var novaColuna = MyUtil.deepCopy(this.props.colunas);

    for(let i in novaColuna){
      //Armazena os itens da query que serão utilizados
      var itensQuery = MyParser.separaItensSelecao(novaColuna[i]);

      for(let j in itensQuery){
        //Substitui no vetor que possui os nomes das colunas da tabela pelo
        //seu respectivo valor
        novaColuna[i] = novaColuna[i].replace(itensQuery[j], this.props.data[itensQuery[j]])
      }

      //Armazena o item sem as chaves e espaços excessivos
      novaColuna[i] = MyParser.removeChaves(novaColuna[i]);
    }

    this.state.dadosTrocados = novaColuna;
  }

  exclui(){
    let confirmacao = window.confirm("Deseja mesmo excluir?");
  }

  render(){
    return (
      <div className = "table-responsive">
        <table className = "table text-center">
          <thead className = "table-dark table-bordered">
            <tr>
              {this.props.cabecalho.map((item) => {
                return (
                  <th key = {item} scope = "col">
                    {item}
                  </th>
                )
              })}

              <th scope = "col" colSpan = "2">Ações</th>
            </tr>
          </thead>
          {this.state.dataConv.length > 0 ?

          <tbody className = "bg-light">
            <tr scope = "row">
              {this.state.dadosTrocados.map((coluna) => {
                return (
                  <td key = {"itemLinhaLista" + MyUtil.keyAleatoria()}  scope = "col">
                    {coluna}
                  </td>
                )

              })}
              <td scope = "col">
                <a href = {"/" + this.props.linkAcoes + "/" + this.props.data.id + "/edit"}>
                  Editar
                </a>
              </td>
              <td scope = "col">
                <a href = "" onClick = {this.exclui}>
                  Excluir
                </a>
              </td>
            </tr>

          </tbody>

          : null }
        </table>
      </div>
    )
  }
}
