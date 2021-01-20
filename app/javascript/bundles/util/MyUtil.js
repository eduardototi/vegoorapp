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
}

export default new MyUtil();
