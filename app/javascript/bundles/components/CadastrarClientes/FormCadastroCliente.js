import PropTypes from "prop-types";
import React from "react";
import MyRegex from "../../util/MyRegex";

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
      pais: ""
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
                <label htmlFor = "razaoSocial">
                  Razão Social
                </label>
                <input id = "razaoSocial" type = "text" className = "form-control" placeholder = "Razão Social" onChange = {this.setRazaoSocial} required/>
              </div>

              <div className = "col">
                <label htmlFor = "cpnj">
                  CNPJ
                </label>
                <input id = "cpnj" type = "text" className = "form-control" placeholder = "CPNJ" onChange = {this.setCnpj} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "matricula">
                  Insc. Estadual
                </label>
                <input id = "matricula" type = "text" className = "form-control" placeholder = "Insc. Estadual" onChange = {this.setInscEstadual} required/>
              </div>

              <div className = "col">
                <label htmlFor = "unidade">
                  Unidade
                </label>
                <input id = "unidade" type = "text" className = "form-control" placeholder = "Unidade" onChange = {this.setUnidade} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "email">
                  E-mail
                </label>
                <input id = "email" type = "email" className = "form-control" placeholder = "E-mail" onChange = {this.setEmail} required/>
              </div>

              <div className = "col">
                <label htmlFor = "telefone">
                  Telefone
                </label>
                <input id = "telefone" type = "text" className = "form-control" placeholder = "Telefone" onChange = {this.setTelefone} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "endereco">
                  Endereço
                </label>
                <input id = "rua" endereco = "text" className = "form-control" placeholder = "Endereço" onChange = {this.setRua} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "numero">
                  Número
                </label>
                <input id = "numero" type = "text" className = "form-control" placeholder = "Número" onChange = {this.setNumero} required/>
              </div>

              <div className = "col">
                <label htmlFor = "bairro">
                  Bairro
                </label>
                <input id = "bairro" type = "text" className = "form-control" placeholder = "Bairro" onChange = {this.setBairro} required/>
              </div>

              <div className = "col">
                <label htmlFor = "cep">
                  CEP
                </label>
                <input id = "cep" type = "text" className = "form-control" placeholder = "CEP" onChange = {this.setCep} required/>
              </div>
            </div>

            <div className = "row mt-2">
              <div className = "col">
                <label htmlFor = "cidade">
                  Cidade
                </label>
                <input id = "cidade" type = "text" className = "form-control" placeholder = "Cidade" onChange = {this.setCidade} required/>
              </div>

              <div className = "col">
                <label htmlFor = "bairro">
                  Estado
                </label>
                <select id = "bairro" className = "form-control" onChange = {this.setBairro} required>
                  <option defaultValue>Selecione um estado</option>
                  {this.props.estados.map((estado) => {
                    return (
                      <option key = {"estado" + estado} value = {estado}>
                        {estado}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className = "col">
                <label htmlFor = "pais">
                  País
                </label>
                <input id = "pais" type = "text" className = "form-control" placeholder = "País" onChange = {this.setPais} required/>
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
