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
}

export default new MyUtil();
