import PropTypes from "prop-types";
import React from "react";
import MyUtil from "../../../util/MyUtil";

export default class ItemAdicao extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);

    this.deleta = this.deleta.bind(this);
  }

  deleta(){
    document.getElementById(this.props.id).remove();
  }

  render() {
    return (
      <div id = {this.props.id}>
        <div className = "container">
          {this.props.data.map((item) => {
            let key = this.props.id + MyUtil.keyAleatoria();

            return (
              <div className = "row" key = {key}>
                <div className = "col">
                  {item[0]}: {item[1]}
                </div>
              </div>
            )
          })}
          <div className = "row">
            <div className = "col">
              <button type = "button" className = "btn btn-danger btn-sm" onClick = {this.deleta}>
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
