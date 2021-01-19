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

export default class FormCadastroCliente extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
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
      estados: []
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

  render() {
    return (
      <div>
        <form>
          <div className = "container">
            <div className = "row">
              <div className = "col">
                <CampoTexto id = "razaoSocial"
                            label = "Razão Social"
                            placeholder = "true"
                            setState = {this.setRazaoSocial}/>
              </div>
              <div className = "col">
                <CampoTexto id = "cnpj"
                            label = "CNPJ"
                            placeholder = "true"
                            setState = {this.setCnpj}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "inscEstadual"
                            label = "Insc. Estadual"
                            placeholder = "true"
                            setState = {this.setInscEstadual}/>
              </div>
              <div className = "col">
                <CampoTexto id = "unidade"
                            label = "Unidade"
                            placeholder = "true"
                            setState = {this.setUnidade}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoEmail id = "email"
                            label = "E-mail"
                            placeholder = "true"
                            setState = {this.setEmail}/>
              </div>
              <div className = "col">
                <CampoTelefone id = "telefone"
                               label = "Telefone"
                               placeholder = "true"
                               setState = {this.setTelefone}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "endereco"
                            label = "Endereço"
                            placeholder = "true"
                            setState = {this.setRua}/>
              </div>
            </div>
            <div className = "row mt-2">
              <div className = "col">
                <CampoNumerico id = "numero"
                               label = "Número"
                               step = "1"
                               placeholder = "true"
                               setState = {this.setNumero}/>
              </div>
              <div className = "col">
                <CampoTexto id = "bairro"
                            label = "Bairro"
                            placeholder = "true"
                            setState = {this.setBairro}/>
              </div>
              <div className = "col">
                <CampoCep id = "cep"
                          label = "CEP"
                          placeholder = "true"
                          setState = {this.setCep}/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <CampoTexto id = "cidade"
                            label = "Cidade"
                            placeholder = "true"
                            setState = {this.setCidade}/>
              </div>
              <div className = "col">
                <CampoDropdown id = "bairro"
                               label = "Estado"
                               opc = {this.state.estados}
                               selecionado = "Selecione..."
                               setState = {this.setEstado}/>
              </div>
              <div className = "col">
                <CampoTexto id = "pais"
                            label = "País"
                            placeholder = "true"
                            setState = {this.setPais}/>>
              </div>
            </div>

            <div className = "row mt-4 text-center">
              <div className = "col">
                <button type = "button" className = "btn btn-primary">
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
