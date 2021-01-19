import PropTypes from "prop-types";
import React from "react";
import MyParser from "../../util/MyParser";

export default class Lista extends React.Component {
  static propTypes = {
    cabecalho: PropTypes.array.isRequired,
    itens: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);
  }

  substituiValores(item){
    for(let i in this.props.itens){
      //Armazena os itens da query que serão utilizados
      var itensQuery = MyParser.separaItensSelecao(this.props.itens[i]);

      for(let j in itensQuery){
        //Substitui no vetor que possui os nomes das colunas da tabela pelo
        //seu respectivo valor
        this.props.itens[i] = this.props.itens[i].replace(itensQuery[j], item[itensQuery[j]])
      }

      //Armazena o item sem as chaves e espaços excessivos
      this.props.itens[i] = MyParser.removeChaves(this.props.itens[i]);
    }
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
          <tbody className = "bg-light">
            <tr scope = "row">
              {this.props.data.map((itemData) => {
                this.substituiValores(itemData);

                return this.props.itens.map((item) => {
                  return (
                    <td key = {item} scope = "col">
                      {item}
                    </td>
                  )
                })
              })}

              <td scope = "col">Visualizar</td>
              <td scope = "col">Editar</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
