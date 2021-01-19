import PropTypes from "prop-types";
import React from "react";

export default class CabecalhoLista extends React.Component {
  static propTypes = {
    itens: PropTypes.array.isRequired
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className = "table-responsive">
        <table className = "table text-center">
          <thead className = "table-dark table-bordered">
            <tr>
              {this.props.itens.map((item) => {
                return (
                  <th key = {item} scope = "col">
                    {item}
                  </th>
                )
              })}

              <th scope = "col" colSpan = "2">Ações</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}
