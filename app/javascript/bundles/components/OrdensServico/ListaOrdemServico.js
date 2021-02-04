import PropTypes from "prop-types";
import React from "react";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import MyUtil from "../../util/MyUtil";
import MyParser from "../../util/MyParser";
import "../../styles/Geral.css";
import "./Style.css";

export default class ListaOrdemServico extends React.Component {
  static propTypes = {
    cabecalho: PropTypes.array.isRequired,
    colunas: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    empresas: PropTypes.array.isRequired,
    maxPorPagina: PropTypes.number.isRequired,
    linkAcoes: PropTypes.string.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      prestadora: "",
      dadosTrocados: [],
      dadosPaginados: [],
      barraPaginacao: [],
      nPaginas: 1,
      numeroPaginaAtual: 0
    }

    this.setPrestadora = this.setPrestadora.bind(this);
  }

  async setPrestadora(e){
    await this.setState({prestadora: e.target.value});

    await this.montaTabela();
  }

  async defineNPaginas(){
    let nPaginas =  this.props.data[this.state.prestadora].length == 0 ? 1 : Math.ceil(this.props.data.[this.state.prestadora].length / this.props.maxPorPagina);

    await this.setState({nPaginas: nPaginas});
  }

  async substituiValores(item){
    //Armazena uma cópia para alterar os dados a serem substituidos no prop "colunas"
    let novaColuna = MyUtil.deepCopy(this.props.colunas);
    let novosDados = MyUtil.deepCopy(this.state.dadosTrocados);

    for(let i in novaColuna){
      //Armazena os itens da query que serão utilizados
      let itensQuery = MyParser.separaItensSelecao(novaColuna[i]);

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
    let dadosPaginados = [];
    let index = 0;

    for(let i = 0; i < this.state.nPaginas; i ++){
      dadosPaginados.push([]);

      for(let j = 0; j < this.props.maxPorPagina; j ++){
        if(index < this.state.dadosTrocados.length){
          let linha = [];
          let id = this.props.data[this.state.prestadora][index].idAbsoluto;

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

    if(dadosPaginados.length == 0)
      for(let i in this.props.cabecalho)
        dadosPaginados.push(<tr><td></td></tr>);

    await this.setState({dadosPaginados: dadosPaginados});
  }

  async montaBarraPaginacao(){
    let barraPaginacao = [this.criaSpanNumeroPaginacao("<", () => this.paginaAnterior(), false)];
    let maxPaginas = Math.ceil(this.state.dadosTrocados.length / this.props.maxPorPagina);
    //Caso o resultado de maxPaginas seja igual a zero ou diferente de um número, maxPaginas recebe zero
    maxPaginas = maxPaginas == 0 || !Number.isInteger(maxPaginas) ? 1 : maxPaginas;

    //Adiciona números das páginas para navegar entre elas
    for(let i = 1; i <= maxPaginas; i ++){
      //nPagina -1 pq a contagem do vetor começa em zero
      barraPaginacao.push(this.criaSpanNumeroPaginacao(i, () => this.mudaPagina(i - 1), false))
    }

    barraPaginacao.push(this.criaSpanNumeroPaginacao(">", () => this.proximaPagina(), false));

    await this.setState({barraPaginacao: barraPaginacao});
    this.adicionaSublinhadoPaginacao();
  }

  //Função auxiliar para criar os números da paginação
  criaSpanNumeroPaginacao(numero, funcao, selecionada){
    return (
      <span id = {"pag" + (numero - 1)}
            key = {"pagina" + MyUtil.keyAleatoria()}
            className = {selecionada ? "cursorLink semSelecao underline" : "cursorLink semSelecao"}
            onClick = {funcao}>
            {" " + numero + " "}
      </span>
    )
  }

  adicionaSublinhadoPaginacao(){
    document.getElementById("pag" + this.state.numeroPaginaAtual).classList.add("paginaSelecionada");
  }

  removeSublinhadoPaginacao(){
    document.getElementById("pag" + this.state.numeroPaginaAtual).classList.remove("paginaSelecionada");
  }

  async proximaPagina(){
    let pagina = this.state.numeroPaginaAtual + 1;

    if(pagina < this.state.nPaginas){
      this.removeSublinhadoPaginacao();
      await this.setState({numeroPaginaAtual: pagina});
      this.adicionaSublinhadoPaginacao();
    }

  }

  async paginaAnterior(){
    let pagina = this.state.numeroPaginaAtual - 1;

    if(pagina >= 0){
      this.removeSublinhadoPaginacao();
      await this.setState({numeroPaginaAtual: pagina});
      this.adicionaSublinhadoPaginacao();
    }
  }

  async mudaPagina(nPagina){
    this.removeSublinhadoPaginacao();
    await this.setState({numeroPaginaAtual: nPagina});
    this.adicionaSublinhadoPaginacao();
  }

  async montaTabela(){
    if(this.state.prestadora != ""){
      //Reseta os dados trocados
      await this.setState({dadosTrocados: []});
      await this.defineNPaginas();

      for(let i in this.props.data[this.state.prestadora]){
        await this.substituiValores(this.props.data[this.state.prestadora][i]);
      }

      //É necessário aguardar a montagem da paginação para montar a barra da paginação
      await this.montaPaginacao();
      await this.montaBarraPaginacao();
    }
  }

  async componentDidMount(){
    await this.montaTabela();
  }

  render(){
    return (
      <div className = "table-responsive">
        <table className = "table text-center">
          <thead className = "table-dark table-bordered">
            <tr>
              <td className = "text-left" colSpan = {this.props.cabecalho.length + 2}>
                <div className = "container">
                  <div className = "row">
                    <div className =  "col-auto">
                      <CampoDropdown id = "empresa"
                                     label = "Empresa"
                                     opc = {this.props.empresas}
                                     selecionado = {this.state.prestadora}
                                     setState = {this.setPrestadora}/>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
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
          {this.props.data[this.state.prestadora].length > 0 && this.state.dadosPaginados.length > 0 ?

          <tbody className = "bg-light">

            {this.state.dadosPaginados[this.state.numeroPaginaAtual].map((linha) => {
              return (
                <tr key = {"linha" + MyUtil.keyAleatoria()} scope = "row">
                  {linha}
                </tr>
              )
            })}

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
