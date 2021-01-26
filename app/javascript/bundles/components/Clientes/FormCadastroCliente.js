import PropTypes from "prop-types";
import React from "react";
import MyRegex from "../../util/MyRegex";
import CampoCep from "../Comum/Forms/CampoCep";
import CampoCnpj from "../Comum/Forms/CampoCnpj";
import CampoTexto from "../Comum/Forms/CampoTexto";
import CampoEmail from "../Comum/Forms/CampoEmail";
import CampoNumerico from "../Comum/Forms/CampoNumerico";
import CampoTelefone from "../Comum/Forms/CampoTelefone";
import CampoDropdown from "../Comum/Forms/CampoDropdown";
import Notificacao from "../Comum/Notificacao/Notificacao";
import ExibidorNotificacao from "../Comum/Notificacao/ExibidorNotificacao";
import MyUtil from "../../util/MyUtil";
import MyRequests from "../../util/MyRequests"

export default class FormEdicaoCliente extends React.Component {
  static propTypes = {
    idUsuario: PropTypes.number.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
      razaoSocial: "",
      cnpj: "",
      inscEstadual: "",
      unidade: "",
      email: "",
      telefone: "",
      rua: "",
      numero: "",
      bairro: "",
      cep: "",
      estado: "",
      cidade: "",
      pais: "",
      idUsuario: this.props.idUsuario,
      estados: [],
      notificacoes: []
    };

    this.setRazaoSocial = this.setRazaoSocial.bind(this);
    this.setCnpj = this.setCnpj.bind(this);
    this.setInscEstadual = this.setInscEstadual.bind(this);
    this.setUnidade = this.setUnidade.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setTelefone = this.setTelefone.bind(this);
    this.setRua = this.setRua.bind(this);
    this.setNumero = this.setNumero.bind(this);
    this.setBairro = this.setBairro.bind(this);
    this.setCep = this.setCep.bind(this);
    this.setEstado = this.setEstado.bind(this);
    this.setCidade = this.setCidade.bind(this);
    this.setPais = this.setPais.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    let estados = [];

    for(let i in this.props.estados){
      estados.push([this.props.estados[i], this.props.estados[i]]);
    }

    this.state.estados = estados;
  }

  setRazaoSocial(e){
    this.setState({nome: e.target.value});
  }

  setCnpj(e){
    this.setState({cnpj: e.target.value});
  }

  setInscEstadual(e){
    this.setState({inscEstadual: e.target.value});
  }

  setUnidade(e){
    this.setState({unidade: e.target.value});
  }

  setEmail(e){
    this.setState({email: e.target.value});
  }

  setTelefone(e){
    this.setState({telefone: e.target.value});
  }

  setRua(e){
    this.setState({rua: e.target.value});
  }

  setNumero(e){
    this.setState({numero: e.target.value});
  }

  setBairro(e){
    this.setState({bairro: e.target.value});
  }

  setCep(e){
    this.setState({cep: e.target.value});
  }

  setEstado(e){
    this.setState({estado: e.target.value});
  }

  setCidade(e){
    this.setState({cidade: e.target.value});
  }

  setPais(e){
    this.setState({pais: e.target.value});
  }

  async handleSubmit(e){
    //Evita que a página recarregue após o envio do formulário
    e.preventDefault();
    let notificacoesNovas = [];
    let camposVazios = MyUtil.verificaCamposVazios(["Razão Social", "CNPJ", "Inscrição Estadual", "Unidade",
                                                    "E-mail", "Telefone", "Endereço", "Número", "Bairro",
                                                    "CEP", "Cidade", "Estado", "País", "Confirme a Senha"],
                                                   this.state);

    if(camposVazios.length > 0){
      let notificacoesCamposVazios = MyUtil.criaNotificacoesErro("Campo vazio: ", camposVazios);

      for(let i in notificacoesCamposVazios){
        notificacoesNovas.push(notificacoesCamposVazios[i]);
      }
    }
    else{
      let url = "/create_client";
      let payload = {"razao_social": this.state.razaoSocial,
                     "cnpj": this.state.cnpj,
                     "ie": this.state.inscEstadual,
                     "street": this.state.rua,
                     "email": this.state.email,
                     "phone": this.state.telefone,
                     "pais": this.state.pais,
                     "city": this.state.cidade,
                     "unity": this.state.unidade,
                     "number": this.state.numero,
                     "neighborhood": this.state.bairro,
                     "state": this.state.estado,
                     "city": this.state.cidade,
                     "user_id": parseInt(this.state.idUsuario),
                     "cep": this.state.cep};
      let response = await MyRequests.post(url, payload);
      let tipoResponse = response["code"] == 200 ? "sucesso" : "erro";

      notificacoesNovas.push(<Notificacao tipo = {tipoResponse} msg = {response["msg"]}/>);
    }

    this.setState({notificacoes: notificacoesNovas});
    MyUtil.scrollToTop();
  }

  render() {
    return (
      <div>
        <ExibidorNotificacao notificacoes = {this.state.notificacoes}/>

        <form onSubmit = {this.handleSubmit} className = "mt-2">
          <div className = "container">
            <div className = "row">
              <div className = "col">
                <CampoTexto id = "razaoSocial"
                            label = "Razão Social"
                            placeholder = "true"
                            value = {this.state.razaoSocial}
                            setState = {this.setRazaoSocial}/>
              </div>
              <div className = "col">
                <CampoCnpj id = "cnpj"
                           label = "CNPJ"
                           placeholder = "true"
                           value = {this.state.cnpj}
                           setState = {this.setCnpj}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "inscEstadual"
                            label = "Inscrição Estadual"
                            placeholder = "true"
                            value = {this.state.inscEstadual}
                            setState = {this.setInscEstadual}/>
              </div>
              <div className = "col">
                <CampoTexto id = "unidade"
                            label = "Unidade"
                            placeholder = "true"
                            value = {this.state.unidade}
                            setState = {this.setUnidade}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoEmail id = "email"
                            label = "E-mail"
                            placeholder = "true"
                            value = {this.state.email}
                            setState = {this.setEmail}/>
              </div>
              <div className = "col">
                <CampoTelefone id = "telefone"
                               label = "Telefone"
                               placeholder = "true"
                               value = {this.state.telefone}
                               setState = {this.setTelefone}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "endereco"
                            label = "Endereço"
                            placeholder = "true"
                            value = {this.state.endereco}
                            setState = {this.setRua}/>
              </div>
            </div>
            <div className = "row mt-2">
              <div className = "col">
                <CampoNumerico id = "numero"
                               label = "Número"
                               step = "1"
                               placeholder = "true"
                               value = {this.state.numero}
                               setState = {this.setNumero}/>
              </div>
              <div className = "col">
                <CampoTexto id = "bairro"
                            label = "Bairro"
                            placeholder = "true"
                            value = {this.state.bairro}
                            setState = {this.setBairro}/>
              </div>
              <div className = "col">
                <CampoCep id = "cep"
                          label = "CEP"
                          placeholder = "true"
                          value = {this.state.cep}
                          setState = {this.setCep}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "cidade"
                            label = "Cidade"
                            placeholder = "true"
                            value = {this.state.cidade}
                            setState = {this.setCidade}/>
              </div>
              <div className = "col">
                <CampoDropdown id = "bairro"
                               label = "Estado"
                               opc = {this.state.estados}
                               selecionado = {this.state.estado}
                               setState = {this.setEstado}/>
              </div>
              <div className = "col">
                <CampoTexto id = "pais"
                            label = "País"
                            placeholder = "true"
                            value = {this.state.pais}
                            setState = {this.setPais}/>
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
