import React from "react";

const CampoDropdown = (props) => {
  let id = props.id ? props.id : props.label;
  let selecionado = <option defaultValue> {props.selecionado} </option>;
  let opc = props.opc;

  //Procura o valor selecionado (defaultValue) na lista de opções, caso exista
  //nela, ele é substituido pela a achada e removido da lista
  for(let i in opc){
    if(props.selecionado == opc[i][0]){
      selecionado = <option value = {opc[i][1]} defaultValue> {opc[i][0]} </option>
      delete opc[i];
    }
  }

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <select id = {id} className = "form-control" onChange = {props.setState}>
        {selecionado}
        {opc.map((item) => {
          return (
            <option key = {id + "" + item[0]} value = {item[1]}>{item[0]}</option>
          )
        })}
      </select>
    </div>
  )
}

export default CampoDropdown;
