import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext({});

export const useLoading = (buttonId) => {
  const { loadingStates, startBtnLoading, stopBtnLoading } =
    useContext(LoadingContext);

  const isBtnLoading = loadingStates[buttonId] || false;

  return {
    isBtnLoading,
    startBtnLoading: () => startBtnLoading(buttonId),
    stopBtnLoading: () => stopBtnLoading(buttonId),
  };
};

export const LoadingProvider = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState({});

  const startBtnLoading = (buttonId) => {
    setLoadingStates((prevState) => ({
      ...prevState,
      [buttonId]: true,
    }));
  };

  const stopBtnLoading = (buttonId) => {
    setLoadingStates((prevState) => ({
      ...prevState,
      [buttonId]: false,
    }));
  };

  const contextValue = {
    loadingStates,
    startBtnLoading,
    stopBtnLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};
