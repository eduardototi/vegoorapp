import PropTypes from "prop-types";
import React from "react";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoMultiplaEscolha from "../Comum/Forms/CampoMultiplaEscolha";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests";

export default class FormCadastroMaquina extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      ativo: false,
      notificacoes: []
    };

    this.setNome = this.setNome.bind(this);
    this.setAtivo = this.setAtivo.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setNome(e){
    this.setState({nome: e.target.value});
  }

  setAtivo(e){
    this.setState({ativo: e.target.value});
  }

  handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();

    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Nome", "Ativo"],
                                                   this.state);

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      let url = "/create_utensil";
      let payload = {"name": this.state.nome,
                     "status": this.state.ativo};
      let response = MyRequests.post(url, payload);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render() {
    return (
      <div>
        <div className = "mb-2">
          {this.state.notificacoes.map((notificacao) => {
            return (
              <div key = {MyUtil.keyAleatoria()} className = "mt-1">
                {notificacao}
              </div>
            )
          })}
        </div>
        
        <form onSubmit = {this.handleSubmit}>
          <div className = "container">
            <div className = "row">
              <div className = "col">
                <CampoTexto id = "nome"
                            label = "Nome"
                            placeholder = "true"
                            value = {this.state.nome}
                            setState = {this.setNome}/>
              </div>
              <div className = "col">
                <CampoMultiplaEscolha id = "ativo"
                                      label = "Ativo"
                                      opc = {[["Sim", true], ["Não", false]]}
                                      selecionado = {this.state.ativo}
                                      setState = {this.setAtivo}/>
              </div>
            </div>

            <div className = "row mt-4 text-center">
              <div className = "col">
                <button type = "submit" className = "btn btn-primary">
                  Cadastrar
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}
