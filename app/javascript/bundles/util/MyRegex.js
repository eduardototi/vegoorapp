class MyRegex {
  constructor(){
    //(XX)XXXXX-XXXX
    this.regexTelefone = /\([0-9]{2}\)[0-9]{5}\-[0-9]{4}/gi;
    //11 Dígitos sem ponto, hífen e contra barra
    this.regexCnpj = /[0-9]{11}/gi;
    //Dígitos sem ponto e hífen
    this.regexCep = /[0-9]{5}/gi;
  }

  getRegexTelefone(){
    return this.regexTelefone;
  }

  getRegexCnpj(){
    return this.regexCnpj;
  }

  getRegexCep(){
    return this.regexCep;
  }
}

export default new MyRegex();
