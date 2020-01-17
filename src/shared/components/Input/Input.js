import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

function Input(props) {
  const {
    placeholder,
    maxLength,
    className,
    type,
    change,
    onInputBlur,
    value,
    id,
    validate,
    errorText,
    spanText
  } = props;

  useEffect(() => {}, [value]);

  // function onChange(res) {
  //   change(res.target.value);
  // }

  return (
    <div className="Input">
      <div
        className={
          validate
            ? "form-group col-lg-12 col-md-12 col-sm-12 green-border border-radius mb-0"
            : "form-group col-lg-12 col-md-12 col-sm-12 border-radius border border-danger mb-0"
        }
      >
        <label className="has-float-label">
          <input
            value={value}
            className={className}
            type={type}
            maxLength={maxLength}
            onChange={e => change(e)}
            placeholder={placeholder}
            onBlur={onInputBlur}
            id={id}
            required
          />
          <span className="span-text">{spanText}</span>
        </label>
      </div>

      <div
        className={
          validate
            ? "error-text text-left"
            : "d-block error-text text-danger text-left"
        }
      >
        {validate ? "" : errorText}
      </div>
    </div>
  );
}

Input.prototype = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  change: PropTypes.func,
  onInputBlur: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.string,
  spanText: PropTypes.string,
  isTouched: PropTypes.bool,
  validate: PropTypes.bool,
  errorText: PropTypes.string
};

export default Input;
