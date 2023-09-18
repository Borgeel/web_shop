import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setisLoading] = useState(false);

  const startLoading = () => {
    setisLoading(true);
  };
  const stopLoading = () => {
    setisLoading(false);
  };

  return { isLoading, startLoading, stopLoading };
};
