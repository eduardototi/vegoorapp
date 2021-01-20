import React from "react";

const CampoSenha = (props) => {
  let id = props.id ? props.id : props.label;

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <input id = {id}
             type = "password"
             className = "form-control"
             placeholder = {props.placeholder ? props.label : ""}
             value = {props.value}
             onChange = {props.setState}/>
    </div>
  )
}

export default CampoSenha;
