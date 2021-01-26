import React from "react";
import MyUtil from "../../../util/MyUtil";

const ExibidorNotificacao = (props) => {
  return (
    <div>
      {props.notificacoes.map((notificacao) => {
        return (
          <div key = {"notificacao" + MyUtil.keyAleatoria()} className = "mt-1">
            {notificacao}
          </div>
        )
      })}
    </div>
  )
}

export default ExibidorNotificacao;
