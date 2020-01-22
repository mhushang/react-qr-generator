import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

function Button(props) {
  const { label, type, click } = props;

  return (
    <button className={type} onClick={click} type="button">
      {label}
    </button>
  );
}

Button.prototype = {
  label: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func
};

export default Button;
