const Input = ({
  name,
  type,
  changeHandler,
  label,
  autoFous,
  labelClass,
  labelText,
  inputClass,
  placeHolder,
}) => {
  return (
    <div>
      <label htmlFor={label} className={labelClass}>
        {labelText}
      </label>
      <input
        name={name}
        type={type}
        onChange={changeHandler}
        className={inputClass}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
