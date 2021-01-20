import React from "react";

const CampoNumerico = (props) => {
  let id = props.id ? props.id : props.label;

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <input id = {id}
             type = "number"
             min = {props.min}
             max = {props.max}
             step = {props.step}
             className = "form-control"
             placeholder = {props.placeholder ? props.label : ""}
             pattern = {props.pattern}
             value = {props.value}
             onChange = {props.setState}/>
    </div>
  )
}

export default CampoNumerico;
