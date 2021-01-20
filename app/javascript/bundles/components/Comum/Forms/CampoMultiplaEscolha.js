import React from "react";

const CampoMultiplaEscolha = (props) => {
  let id = props.id ? props.id : props.label;

  return(
    <div>
      {props.label ?
      <div>
        <label>
          {props.label}
        </label><br/>
      </div>
      : null
      }

      <div className = "mt-2">
        {props.opc.map((item) => {
          let idOpc = id + "" + item[0];

          return(
            <div key = {idOpc} className = "float-left">
              <input id = {idOpc} name = {id} type = "radio" value = {item[1]} onChange = {props.setState} onClick = {props.onClick}/>
              <label htmlFor = {idOpc}>
                {item[0]}
              </label>&nbsp;
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CampoMultiplaEscolha;
