import React from "react";

const CampoEmail = (props) => {
  let id = props.id ? props.id : props.label;

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <input id = {id}
             type = "email"
             className = "form-control"
             placeholder = {props.placeholder ? props.label : ""}
             value = {props.value}
             onChange = {props.setState}/>
    </div>
  )
}

export default CampoEmail;
