const Button = ({ btnTxt, btnClass, type, onClick, child, icon, link }) => {
  return (
    <button
      className={`hover:scale-105 duration-300 ease-in-out active:-105 border border-white rounded-lg ${btnClass}`}
      type={type}
      onClick={onClick}
    >
      {link}
      {icon && icon}
      {child ? child : btnTxt}
    </button>
  );
};

export default Button;
