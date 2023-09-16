import { useEffect } from "react";

const useCloseModal = (ref, onClose) => {
  const clickOutsideHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideHandler);

    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, [onClose]);
};

export default useCloseModal;
