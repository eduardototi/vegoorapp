import React from "react";

const CampoAreaTexto = (props) => {
  let id = props.id ? props.id : props.label;

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <textarea id = {id}
                type = "text"
                className = "form-control"
                rows = {props.rows}
                cols = {props.cols}
                placeholder = {props.placeholder ? props.label : ""}
                onChange = {props.setState}/>
    </div>
  )
}

export default CampoAreaTexto;
