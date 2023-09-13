const Button = ({ buttonTxt, buttonClass, type, onClick, child, icon }) => {
  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {icon && icon}
      {child ? child : buttonTxt}
    </button>
  );
};

export default Button;
