import React from "react";
import Notificacao from "../components/Comum/Notificacao/Notificacao";

class MyUtil {
  constructor(){

  }

  //Retorna um número aleatório
  numeroAleatorio(){
    let min = Math.floor(Math.random() * (Math.random() * 100));
    let max = Math.floor(Math.random() * (Math.random() * 100));

    if(min > max){
      return Math.random() * (max - min) + min;
    }
    else{
      return Math.random() * (max - min) + min;
    }
  }

  //Retorna uma key aleatória
  keyAleatoria(){
    let min = Math.floor(Math.random() * (Math.random() * 100));
    let max = Math.floor(Math.random() * (Math.random() * 100));

    if(min > max){
      return "key" + Math.random() * (max - min) + min;
    }
    else{
      return "key" + Math.random() * (max - min) + min;
    }
  }

  //Retorna um id aleatório
  keyAleatoria(){
    let min = Math.floor(Math.random() * (Math.random() * 100));
    let max = Math.floor(Math.random() * (Math.random() * 100));

    if(min > max){
      return "id" + Math.random() * (max - min) + min;
    }
    else{
      return "id" + Math.random() * (max - min) + min;
    }
  }

  //Retorna uma string da data atual do sistema
  dataAtual(){
    let hoje = new Date();
    let dia = parseInt(hoje.getDate(), 10);
    //Mês + 1 porque a contagem começa em zero, ou seja,
    //janeiro = 0
    let mes = parseInt(hoje.getMonth() + 1, 10);
    let ano = parseInt(hoje.getFullYear(), 10);

    //Adiciona zero na frente do dia ou mês caso ele
    //possua somente uma casa, ou seja, menor que 10
    dia = dia > 10 ? dia.toString() : "0" + dia.toString();
    mes = mes > 10 ? mes.toString() : "0" + mes.toString();

    return dia + "/" + mes + "/" + ano.toString();
  }

  //Retorna uma cópia de um objeto
  deepCopy(objeto){
    return JSON.parse(JSON.stringify(objeto));
  }

  //Verifica se existem campos vazios
  verificaCamposVazios(titulos, campos){
    let pos = 0;
    let vazios = [];

    for(let i in campos){
      if(campos[i] === null || campos[i] === ""){
        vazios.push(titulos[pos]);
      }

      pos ++;
    }

    return vazios;
  }

  //Cria notificações de erro com o mesmo erro para todas as notificações
  criaNotificacoesErro(erro, msgs){
    let notificacoes = [];

    for(let i in msgs){
      notificacoes.push(<Notificacao tipo = "erro" msg = {erro + " " + msgs[i]} />);
    }

    return notificacoes;
  }

  //Faz com que a scrollbar fique no topo
  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //Busca um elemento numa matriz e retorna o vetor em que ele se encontra
  buscaMatriz(matriz, valor){
    for(let i in matriz){
      for(let j in matriz[i]){
        if(matriz[i][j] == valor){
          return matriz[i];
        }
      }
    }

    return null;
  }
}

export default new MyUtil();
