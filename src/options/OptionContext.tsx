import React, { createContext, useState } from "react";
import Option from "./Option";

const OptionContext = createContext({});

export const OptionProvider = ({ options, children }) => {
  const [state, setState] = useState({});
  const [stateChangeListeners, setStateChangeListeners] = useState(new Set());
  const [valueChangeListeners, setValueChangeListeners] = useState(new Set());
  const [data, setData] = useState({});

  const getOptionState = (key) => {
    return state[key] || null;
  };

  const optionEnter = (key) => {
    const optionState = getOptionState(key);
    if (optionState) {
      setState({
        ...state,
        [key]: {
          ...optionState,
          available: optionState.available + 1,
        },
      });
    }
  };

  const optionExit = (key) => {
    const optionState = getOptionState(key);
    if (optionState) {
      setState({
        ...state,
        [key]: {
          ...optionState,
          available: optionState.available - 1,
        },
      });
    }
  };

  const getValue = (key) => {
    const optionState = getOptionState(key);
    if (!optionState) {
      return null;
    }
    const value = data[key];
    if (value) {
      return value;
    }
    return optionState.defaultValue || null;
  };

  const setValue = (key, value) => {
    for (const listener of Array.from(valueChangeListeners)) {
      listener(key, value);
    }
  };

  const addStateChangeListener = (listener) => {
    setStateChangeListeners(stateChangeListeners.add(listener));
  };

  const removeStateChangeListener = (listener) => {
    stateChangeListeners.delete(listener);
  };

  const addValueChangeListener = (listener) => {
    setValueChangeListeners(valueChangeListeners.add(listener));
  };

  const removeValueChangeListener = (listener) => {
    valueChangeListeners.delete(listener);
  };

  const setOptions = (key, options) => {
    setState({
      ...state,
      [key]: {
        ...state[key],
        key,
        options,
      },
    });
  };

  const setDefaultValue = (key, defaultValue) => {
    const optionState = getOptionState(key);
    if (optionState) {
      setState({
        ...state,
        [key]: {
          ...optionState,
          defaultValue,
        },
      });
    }
  };

  const notifyListeners = () => {
    for (const listener of Array.from(stateChangeListeners)) {
      listener();
    }
  };

  const contextValue = {
    options,
    state,
    getOptionState,
    addStateChangeListener,
    removeStateChangeListener,
    addValueChangeListener,
    removeValueChangeListener,
    optionEnter,
    optionExit,
    getValue,
    setValue,
    setData,
    setDefaultValue,
    setOptions,
  };

  return (
    <OptionContext.Provider value={contextValue}>
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => {
  return React.useContext(OptionContext);
};
