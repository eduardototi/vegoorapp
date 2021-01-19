import PropTypes from "prop-types";
import React from "react";
import "../../../styles/BarraSuperior.css";

export default class ItemNavBar extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.state = {
    };

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
              <div key = {this.props.titulo + valor}>
                <li>
                  <a className = "dropdown-item">
                    {valor}
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
