import React from "react";
import MyUtil from "../../../util/MyUtil";
import "../../../styles/Geral.css";

const Notificacao = (props) => {
  var id = "notificacao" + MyUtil.keyAleatoria();
  var tipoAlerta = "alert-";

  if(props.tipo == "sucesso"){
    tipoAlerta += "success";
  }
  else if(props.tipo == "erro"){
    tipoAlerta += "danger";
  }
  else if(props.tipo == "info"){
    tipoAlerta += "info";
  }
  else{
    tipoAlerta += "info";
  }

  let esconde = () => {
    document.getElementById(id).remove();
  }

  return (
    <div id = {id} className = {tipoAlerta}>
      <div className = "text-right mr-2">
        <span className = "cursorLink semSelecao" onClick = {esconde}>
          X
        </span>
      </div>

      <div className = "text-left p-2">
        <span>
          {props.msg}
        </span>
      </div>

      <div className = "text-right mr-1">
        <span className = "semSelecao invisible">
          X
        </span>
      </div>
    </div>
  )
}

export default Notificacao;
