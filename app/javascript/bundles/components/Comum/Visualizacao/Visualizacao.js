import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../../util/MyUtil";
import MyParser from "../../../util/MyParser";

export default class Informacoes extends React.Component {
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
      paresDados: []
    }

    this.convData();
    this.criaPares();

    this.exclui = this.exclui.bind(this);
    this.criaPares = this.criaPares.bind(this);
  }

  //Converte o prop data de objeto para uma array
  convData(){
    let dataConv = [];

    for(let i in this.props.data){
      dataConv.push(this.props.data[i]);
    }

    this.state.dataConv = dataConv;
  }

  criaPares(){
    //Armazena uma cópia para alterar os dados a serem substituidos no prop "colunas"
    var novaColuna = MyUtil.deepCopy(this.props.colunas);
    var paresDados = [];

    for(let i in novaColuna){
      //Armazena os itens da query que serão utilizados
      var itensQuery = MyParser.separaItensSelecao(novaColuna[i]);

      for(let j in itensQuery){
        //Substitui no vetor que possui os nomes das colunas da tabela pelo
        //seu respectivo valor
        novaColuna[i] = novaColuna[i].replace(itensQuery[j], this.props.data[itensQuery[j]]);
      }

      //Armazena o item sem as chaves e espaços excessivos
      novaColuna[i] = MyParser.removeChaves(novaColuna[i]);

      //Armazena em pares "cabeçalho, coluna"
      paresDados.push([this.props.cabecalho[i], novaColuna[i]]);
    }

    this.state.paresDados = paresDados;
  }

  exclui(){
    let confirmacao = window.confirm("Deseja mesmo excluir?");
  }

  render(){
    return (
      <div className = "container bg-white">

        <div className = "row">
          <div className = "col">
            {this.state.dataConv.length > 0 ?
              this.state.paresDados.map((item) => {
                return (
                  <div key = {"key" + MyUtil.keyAleatoria()} className = "row">
                    <div className = "col">
                      <b> {item[0]}: </b> {item[1]}
                    </div>
                  </div>
                )
              })
            :null}
          </div>

          {this.props.acoes ?
            <div className = "col text-right">
              <a href = {"/" + this.props.linkAcoes + "/" + this.props.data.id + "/edit"}>
                Editar
              </a>
              &nbsp;
              <a href = "">
                Excluir
              </a>
            </div>
          :null }
          
        </div>
      </div>
    )
  }
}
