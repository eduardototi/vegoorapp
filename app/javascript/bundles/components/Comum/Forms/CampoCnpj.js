import React from "react";
import MyRegex from "../../../util/MyRegex";

const CampoCnpj = (props) => {
  let id = props.id ? props.id : props.label;

  return(
    <div>
      <label htmlFor = {id}>
        {props.label}
      </label>
      <input id = {id}
             type = "text"
             className = "form-control"
             placeholder = {props.placeholder ? props.label : ""}
             pattern = {MyRegex.getRegexCnpj()}
             value = {props.value}
             onChange = {props.setState}/>
    </div>
  )
}

export default CampoCnpj;
