import { useLoading } from "../../contexts/LoadingContext";
import Loader from "./Loader";
import PropTypes from "prop-types";

const Button = ({
  onClickRequest,
  className,
  children,
  buttonId,
  onClick,
  type,
  ...props
}) => {
  // Subscribe to useLoading and immediatly provide it the Button instance id
  const { isBtnLoading, startBtnLoading, stopBtnLoading } =
    useLoading(buttonId);

  const clickHandler = async () => {
    if (!buttonId) {
      if (onClick) {
        return onClick();
      }
    } else {
      startBtnLoading();
      try {
        await onClickRequest();
        stopBtnLoading();
      } catch (error) {
        console.log("Error from Button.clickHandler.onRequest: ", error);
      }
    }
  };

  return (
    <button
      className={`${
        isBtnLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } hover:scale-105 duration-300 ease-in-out active:-105 border border-white rounded-lg ${className}`}
      type={type}
      onClick={isBtnLoading ? null : clickHandler}
      {...props}
    >
      {isBtnLoading ? <Loader /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isBtnLoading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  buttonId: PropTypes.string,
  onClickRequest: PropTypes.func,
};

export default Button;
