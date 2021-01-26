import axios from "axios";

class MyRequests{
  constructor(){

  }

  async post(url, payload){
    //Obtém um token para validar o request
    const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    //Adiciona ao header alguns parâmetros importantes, como o token para autenticação do request
    //e o tipo do conteúdo a ser enviado
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios.defaults.headers.common["Content-type"] = "application/json";

    let retorno = await axios.post(url, payload).then((response) => {
                                                        return {"code": 200,
                                                                "msg": "Criado com sucesso!"}
                                                      })
                                                .catch((response) => {
                                                        return {"code": response.response.status,
                                                                "msg": response.response.statusText}
                                                      });

    return retorno;
  }

  async put(url, payload){
    //Obtém um token para validar o request
    const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    //Adiciona ao header alguns parâmetros importantes, como o token para autenticação do request
    //e o tipo do conteúdo a ser enviado
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios.defaults.headers.common["Content-type"] = "application/json";

    let retorno = await axios.put(url, payload).then((response) => {
                                                      return {"code": 200,
                                                              "msg": "Editado com sucesso!"}
                                                    })
                                               .catch((response) => {
                                                      return {"code": response.response.status,
                                                              "msg": response.response.statusText}
                                                    });

    return retorno;
  }

  async delete(url){
    //Obtém um token para validar o request
    const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    //Adiciona ao header alguns parâmetros importantes, como o token para autenticação do request
    //e o tipo do conteúdo a ser enviado
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios.defaults.headers.common["Content-type"] = "application/json";

    let retorno = await axios.delete(url).then((response) => {
                                                return {"code": 200,
                                                        "msg": "Excluido com sucesso!"}
                                               })
                                         .catch((response) => {
                                                 return {"code": response.response.status,
                                                         "msg": response.response.statusText}
                                               });

    return retorno;
  }
}

export default new MyRequests();
