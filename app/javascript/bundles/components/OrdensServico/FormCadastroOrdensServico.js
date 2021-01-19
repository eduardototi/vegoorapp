import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoNumerico from "../Comum/Forms/CampoNumerico";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import CampoAreaTexto from "../Comum/Forms/CampoAreaTexto";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";
import "../../styles/Geral.css";

export default class FormCadastroOrdensServico extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      prestadora: "",
      tiposServico: [],
      descricao: "",
      responsavel: "",
      cliente: "",
      local: "",
      contatoCliente: "",
      servicos: [],
      observacoes: "",
      epis: []
    };

    this.setPrestadora = this.setPrestadora.bind(this);
    this.setTiposServico = this.setTiposServico.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
    this.setResponsavel = this.setResponsavel.bind(this);
    this.setCliente = this.setCliente.bind(this);
    this.setLocal = this.setLocal.bind(this);
    this.setContatoCliente = this.setContatoCliente.bind(this);
    this.setServicos = this.setServicos.bind(this);
    this.setObservacoes = this.setObservacoes.bind(this);
    this.setEpis = this.setEpis.bind(this);

    this.mudaImagem = this.mudaImagem.bind(this);
  }

  setPrestadora(e){
    this.setState({prestadora: e.target.value});
  }

  setTiposServico(e){
    this.setState({tiposServico: e.target.value});
  }

  setDescricao(e){
    this.setState({descricao: e.target.value});
  }

  setResponsavel(e){
    this.setState({responsavel: e.target.value});
  }

  setCliente(e){
    this.setState({cliente: e.target.value});
  }

  setLocal(e){
    this.setState({local: e.target.value});
  }

  setContatoCliente(e){
    this.setState({contatoCliente: e.target.value});
  }

  setServicos(e){
    this.setState({servicos: e.target.value});
  }

  setObservacoes(e){
    this.setState({observacoes: e.target.value});
  }

  setEpis(e){
    this.setState({epis: e.target.value});
  }

  mudaImagem(e){
    let selecao = e.target.value;
    let imgVegoor = document.getElementById("imgVegoor");
    let imgSf6 = document.getElementById("imgSf6");

    //Alterna entre a exibição da logo da vegoor ou da sf6 dependendo da
    //seleção do usuário
    if(selecao === "1"){
      imgSf6.classList.remove("visible");
      imgSf6.classList.add("invisible");

      imgVegoor.classList.remove("invisible");
      imgVegoor.classList.add("visible");
    }
    else{
      imgVegoor.classList.remove("visible");
      imgVegoor.classList.add("invisible");

      imgSf6.classList.remove("invisible");
      imgSf6.classList.add("visible");
    }
  }

  render() {
    return (
      <div>
        <form>
          <div className = "container">

            <div className = "row">
              <div className = "col">
                <CampoMultiplaEscolha id = "prestador"
                                      label = "Prestadora do serviço:"
                                      opc = {[["Vegoor", 1], ["SF6", 2]]}
                                      setState = {this.setPrestadora}
                                      onClick = {this.mudaImagem}/>
              </div>
              <div className = "col text-center">
                <img id = "imgVegoor"
                     className = "invisible"
                     src = "https://pianorayk.files.wordpress.com/2018/04/example.jpeg"
                     width = "100px"
                     height = "50px"/>

                <img id = "imgSf6"
                     className = "invisible"
                     src = "https://thumbs.dreamstime.com/b/example-stamp-grunge-vintage-isolated-white-background-sign-153942456.jpg"
                     width = "100px"
                     height = "50px"/>
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}
