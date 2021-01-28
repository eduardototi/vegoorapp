import React from "react";

const CampoEscolha = (props) => {
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
              <label htmlFor = {idOpc}>
                &nbsp;{item[0]}
              </label>&nbsp;
              {item[1] === props.selecionado ?
                <input id = {idOpc} name = {id} type = "checkbox" value = {item[1]} onChange = {props.setState} checked/>
                :
                <input id = {idOpc} name = {id} type = "checkbox" value = {item[1]} onChange = {props.setState}/>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CampoEscolha;
