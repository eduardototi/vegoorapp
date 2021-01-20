import PropTypes from "prop-types";
import React from "react";

export default class ItemAdicao extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  /**
  @param props
  **/

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id = {this.props.id}>

      </div>
    );
  }
}
