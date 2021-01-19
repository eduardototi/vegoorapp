class MyParser {
  constructor(){
  }

  //Remove as chaves da string
  removePlacer(string){
    let regex = /\{[0-9a-zA-Z,.ºª: ]{1,}\}/gi;
    //Deixa somente os campos da query que serão utilizados e
    //retira os espaços em branco excessivos
    let novaString = string.replace(regex, "").replace(/[ ]{1,}/, " ");

    return novaString;
  }

  //Retorna os itens separados da query que devem ser utilizados
  separaItensSelecao(string){
    let novaString = this.removePlacer(string);
    //Separa a string por espaços em branco
    let itens = novaString.split(" ");

    return itens;
  }

  //Retorna uma string sem chaves
  removeChaves(string){
    let stringSemChaves = string.replace("{", "").replace("}", "");

    return stringSemChaves;
  }
}

export default new MyParser();
