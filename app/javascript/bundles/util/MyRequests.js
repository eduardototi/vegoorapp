import axios from "axios";

class MyRequests{
  constructor(){

  }

  post(url, payload){
    //Mensagem de retorno
    var retorno = {"code": 200, "msg": "Criado com sucesso!"};
    //Obtém um token para validar o request
    const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    //Adiciona ao header alguns parâmetros importantes, como o token para autenticação do request
    //e o tipo do conteúdo a ser enviado
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios.defaults.headers.common["Content-type"] = "application/json";

    axios.post(url, payload)
         .then(response => {
           retorno["msg"] = response;
         })
         .catch(response => {
           retorno["msg"] = response;
           retorno["code"] = response.code;
         });

    return retorno;
  }

  put(url, payload){
    //Mensagem de retorno
    var retorno = {"code": 200, "msg": "Atualizado com sucesso!"};
    //Obtém um token para validar o request
    const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    //Adiciona ao header alguns parâmetros importantes, como o token para autenticação do request
    //e o tipo do conteúdo a ser enviado
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios.defaults.headers.common["Content-type"] = "application/json";

    axios.put(url, payload)
         .then(response => {
           retorno["msg"] = response;
         })
         .catch(response => {
           retorno["msg"] = response;
           retorno["code"] = response.code;
         });

    return retorno;
  }

  delete(url){
    //Mensagem de retorno
    var retorno = {"code": 200, "msg": "Excluído com sucesso!"};
    //Obtém um token para validar o request
    const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    //Adiciona ao header alguns parâmetros importantes, como o token para autenticação do request
    //e o tipo do conteúdo a ser enviado
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios.defaults.headers.common["Content-type"] = "application/json";

    axios.delete(url)
         .then(response => {
           retorno["msg"] = response;
         })
         .catch(response => {
           retorno["msg"] = response;
           retorno["code"] = response.code;
         });

    return retorno;
  }
}

export default new MyRequests();
