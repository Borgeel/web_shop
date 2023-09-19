import React from "react";
import PropTypes from "prop-types";

const Input = ({
  name,
  type,
  onChange,
  label,
  autoFocus,
  labelClass,
  labelText,
  inputClass,
  placeholder,
  isTextarea,
  ...restProps
}) => {
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {labelText}
        </label>
      )}
      <InputComponent
        name={name}
        type={type}
        onChange={onChange}
        autoFocus={autoFocus}
        className={inputClass}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
  autoFocus: PropTypes.bool,
  labelClass: PropTypes.string,
  labelText: PropTypes.string,
  inputClass: PropTypes.string,
  placeholder: PropTypes.string,
  isTextarea: PropTypes.bool,
};

export default Input;
