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
  txtarea,
}) => {
  return (
    <div>
      <label htmlFor={label} className={labelClass}>
        {labelText}
      </label>
      {txtarea ? (
        <textarea
          name={name}
          onChange={changeHandler}
          className={inputClass}
          placeholder={placeHolder}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          onChange={changeHandler}
          className={inputClass}
          placeholder={placeHolder}
        />
      )}
    </div>
  );
};

export default Input;
