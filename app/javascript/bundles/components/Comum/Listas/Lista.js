import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../../util/MyUtil";
import MyParser from "../../../util/MyParser";
import "../../../styles/Geral.css";

export default class Lista extends React.Component {
  static propTypes = {
    cabecalho: PropTypes.array.isRequired,
    colunas: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    maxPorPagina: PropTypes.number.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      dadosTrocados: [],
      dadosPaginados: [],
      barraPaginacao: [],
      nPaginas: Math.ceil(this.props.data.length / this.props.maxPorPagina),
      numeroPaginaAtual: 0
    }
  }

  async substituiValores(item){
    //Armazena uma cópia para alterar os dados a serem substituidos no prop "colunas"
    var novaColuna = MyUtil.deepCopy(this.props.colunas);
    var novosDados = MyUtil.deepCopy(this.state.dadosTrocados);

    for(let i in novaColuna){
      //Armazena os itens da query que serão utilizados
      var itensQuery = MyParser.separaItensSelecao(novaColuna[i]);

      for(let j in itensQuery){
        //Substitui no vetor que possui os nomes das colunas da tabela pelo
        //seu respectivo valor
        novaColuna[i] = novaColuna[i].replace(itensQuery[j], item[itensQuery[j]])
      }


      //Armazena o item sem as chaves e espaços excessivos
      novaColuna[i] = MyParser.removeChaves(novaColuna[i]);
    }

    novosDados.push(novaColuna);

    await this.setState({dadosTrocados: novosDados});
  }

  async montaPaginacao(){
    var dadosPaginados = [];
    var index = 0;

    for(let i = 0; i < this.state.nPaginas; i ++){
      dadosPaginados.push([]);

      for(let j = 0; j < this.props.maxPorPagina; j ++){
        if(index < this.state.dadosTrocados.length){
          let linha = [];
          let id = this.props.data[index].id;

          for(let k in this.state.dadosTrocados[index]){
            linha.push(<td key = {"coluna" + MyUtil.keyAleatoria()} scope = "col">
                        {this.state.dadosTrocados[index][k]}
                       </td>);
          }

          linha.push(
          <td key = {"visualizar" + MyUtil.keyAleatoria()} scope = "col">
            <a href = {"/" + this.props.linkAcoes + "/" + id}>
              Visualizar
            </a>
          </td>);

          linha.push(
          <td key = {"editar" + MyUtil.keyAleatoria()} scope = "col">
            <a href = {"/" + this.props.linkAcoes + "/" + id + "/edit"}>
              Editar
            </a>
          </td>);

          index ++
          dadosPaginados[i].push(linha);
        }
      }
    }

    await this.setState({dadosPaginados: dadosPaginados});
  }

  async montaBarraPaginacao(){
    var barraPaginacao = [this.criaSpanNumeroPaginacao("<", () => this.paginaAnterior(), false)];
    var maxPaginas = Math.ceil(this.state.dadosTrocados.length / this.props.maxPorPagina);

    //Adiciona números das páginas para navegar entre elas
    for(let i = 1; i <= maxPaginas; i ++){
      //nPagina -1 pq a contagem do vetor começa em zero
      barraPaginacao.push(this.criaSpanNumeroPaginacao(i, () => this.mudaPagina(i - 1), false))
    }

    barraPaginacao.push(this.criaSpanNumeroPaginacao(">", () => this.proximaPagina(), false));

    await this.setState({barraPaginacao: barraPaginacao});
  }

  //Função auxiliar para criar os números da paginação
  criaSpanNumeroPaginacao(numero, funcao, selecionada){
    return (
      <span key = {"pagina" + MyUtil.keyAleatoria()}
            className = {selecionada ? "cursorLink semSelecao underline" : "cursorLink semSelecao"}
            onClick = {funcao}>
            {" " + numero + " "}
      </span>
    )
  }

  selecionaNumeroPaginacao(){
    let numeroSelecionado = this.criaSpanNumeroPaginacao(this.state.numeroPaginaAtual + 1,
                                                         () => this.mudaPagina(this.state.numeroPaginaAtual),
                                                         true);

    this.state.barraPaginacao[this.state.numeroPaginaAtual + 1] = numeroSelecionado;
  }

  proximaPagina(){
    let pagina = this.state.numeroPaginaAtual + 1;

    this.selecionaNumeroPaginacao();

    if(pagina < this.state.nPaginas)
      this.setState({numeroPaginaAtual: pagina});

  }

  paginaAnterior(){
    let pagina = this.state.numeroPaginaAtual - 1;

    if(pagina >= 0)
      this.setState({numeroPaginaAtual: pagina});
  }

  mudaPagina(nPagina){
    this.setState({numeroPaginaAtual: nPagina});
  }

  async componentDidMount(){
    for(let i in this.props.data){
      await this.substituiValores(this.props.data[i]);
    }

    //É necessário aguardar a montagem da paginação para montar a barra da paginação
    await this.montaPaginacao();
    await this.montaBarraPaginacao();
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
          {this.props.data.length > 0 && this.state.dadosPaginados.length > 0 ?

          <tbody className = "bg-light">

            {
              this.state.dadosPaginados[this.state.numeroPaginaAtual].map((linha) => {
                return (
                  <tr key = {"linha" + MyUtil.keyAleatoria()} scope = "row">
                    {linha}
                  </tr>
                )
              })
            }

            <tr scope = "row">
              <td scope = "col" colSpan = {this.props.cabecalho.length + 2}>
                {this.state.barraPaginacao}
              </td>
            </tr>
          </tbody>

          : null }
        </table>
      </div>
    )
  }
}
