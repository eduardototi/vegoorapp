import React from "react";
import MyRegex from "../../../util/MyRegex";

const CampoCep = (props) => {
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
             pattern = {MyRegex.getRegexCep()}
             value = {props.value}
             onChange = {props.setState}/>
    </div>
  )
}

export default CampoCep;
