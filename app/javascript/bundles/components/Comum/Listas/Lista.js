import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../../util/MyUtil";
import MyParser from "../../../util/MyParser";

export default class Lista extends React.Component {
  static propTypes = {
    cabecalho: PropTypes.array.isRequired,
    colunas: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      dadosTrocados: []
    }
  }

  substituiValores(item){
    //Armazena uma cópia para alterar os dados a serem substituidos no prop "colunas"
    var novaColuna = MyUtil.deepCopy(this.props.colunas);

    for(let i in novaColuna){
      //Armazena os itens da query que serão utilizados
      var itensQuery = MyParser.separaItensSelecao(novaColuna[i]);

      for(let j in itensQuery){
        //Substitui no vetor que possui os nomes das colunas da tabela pelo
        //seu respectivo valor
        novaColuna[i] = novaColuna[i].replace(itensQuery[j], item[itensQuery[j]])

        //this.props.colunas[i] = this.props.colunas[i].replace(itensQuery[j], item[itensQuery[j]])
      }

      //Armazena o item sem as chaves e espaços excessivos
      //this.props.colunas[i] = MyParser.removeChaves(this.props.colunas[i]);
      novaColuna[i] = MyParser.removeChaves(novaColuna[i]);
    }

    //this.setState({dadosTrocados: novaColuna});
    this.state.dadosTrocados = novaColuna;
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
          {this.props.data.length > 0 ?

          <tbody className = "bg-light">

              {this.props.data.map((itemData) => {
                this.substituiValores(itemData);

                return (
                  <tr key = {"linhaLista" + MyUtil.keyAleatoria()} scope = "row">
                    {this.state.dadosTrocados.map((item) => {
                      return (
                        <td key = {"itemLinhaLista" + MyUtil.keyAleatoria()}  scope = "col">
                          {item}
                        </td>
                      )
                    })}
                    <td scope = "col">
                      <a href = {"/" + this.props.linkAcoes + "/" + itemData.id}>
                        Visualizar
                      </a>
                    </td>
                    <td scope = "col">
                      <a href = {"/" + this.props.linkAcoes + "/" + itemData.id + "/edit"}>
                        Editar
                      </a>
                    </td>
                  </tr>)
              })}

          </tbody>

          : null }
        </table>
      </div>
    )
  }
}
