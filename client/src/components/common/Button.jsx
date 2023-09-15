const Button = ({ btnTxt, btnClass, type, onClick, child, icon }) => {
  return (
    <button className={btnClass} type={type} onClick={onClick}>
      {icon && icon}
      {child ? child : btnTxt}
    </button>
  );
};

export default Button;
