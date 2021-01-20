import React from "react";
import MyUtil from "../../../util/MyUtil";

const CampoDropdown = (props) => {
  let id = props.id ? props.id : props.label;
  let indiceSelecionado = -1;

  //Procura o valor selecionado (defaultValue) na lista de opções, caso exista
  //nela, a variável indiceSelecionado recebe a sua posição na lista
  for(let i in props.opc){
    if(props.selecionado == props.opc[i][0] || props.selecionado == props.opc[i][1]){
      indiceSelecionado = i;
    }
  }

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <select id = {id} className = "form-control" onChange = {props.setState}>
        {indiceSelecionado >= 0 ?
          <option value = {props.opc[indiceSelecionado][1]} defaultValue>
            {props.opc[indiceSelecionado][0]}
          </option>
        :
        <option defaultValue>
          ERRO: DEFAULT NÃO ENCONTRADO
        </option>}

        {props.opc.map((item) => {
          return (
            <option key = {"keyDropdown" + id + MyUtil.keyAleatoria()} value = {item[1]}>
              {item[0]}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default CampoDropdown;
