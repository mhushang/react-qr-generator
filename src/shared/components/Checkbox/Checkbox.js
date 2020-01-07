import React, { useState } from "react";
import PropTypes from "prop-types";

import "./checkbox.scss";

function Checkbox(props) {
  const { className, change, id } = props;

  let [value, setValue] = useState("");

  function onChange(res) {
    setValue(res.target.value);
    change(res.target.value);
  }

  return (
    <input
      type="checkbox"
      onChange={e => onChange(e)}
      className={className}
      id={id}
    />
  );
}

Checkbox.prototype = {
  className: PropTypes.string,
  id: PropTypes.string
};

export default Checkbox;
