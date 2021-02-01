import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../../util/MyUtil";
import "./Style.css"

export default class ItemNavBar extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li className = "nav-item dropdown pointerCursor disabledTextSelection">
          <a className = "nav-link dropdown-toggle" id = "navbardrop" data-toggle = "dropdown">
            {this.props.titulo}
          </a>
          <ul className = "dropdown-menu">

            {this.props.subitems.map((valor) => {
              return(
              <div key = {"keyNav" + MyUtil.keyAleatoria()}>
                <li>
                  <a className = "dropdown-item" href = {valor[1]}>
                    {valor[0]}
                  </a>
                </li>
              </div>)
            })}

          </ul>
        </li>
      </div>
    );
  }
}
