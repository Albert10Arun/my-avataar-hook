import { createContext, useState } from "react";

export const OptionContext = createContext({});

export const OptionProvider = ({ children }) => {
  const [allValues, setAllValues] = useState();
  const [selectedValues, setSelectedValues] = useState();
  const contextValues = {
    selectedValues,
    setSelectedValues,
    allValues,
    setAllValues,
  };

  return (
    <OptionContext.Provider value={contextValues}>
      {children}
    </OptionContext.Provider>
  );
};
