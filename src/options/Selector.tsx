import React, { useContext, useEffect } from "react";
import Option from "./Option";
import { useOptionContext } from "./OptionContext";

function getComponentOptionValue(component) {
  console.log(component.prototype.constructor.name);
  const optionValue = component.prototype.constructor.name;
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`);
  }
  return optionValue;
}

function Selector({ option, defaultOption, ...props }) {
  const optionContext = useOptionContext();
  console.log(optionContext);
  useEffect(() => {
    const defaultValue =
      typeof defaultOption === "string"
        ? defaultOption
        : getComponentOptionValue(defaultOption);

    optionContext.addStateChangeListener(optionContextUpdate);
    optionContext.optionEnter(option.key);
    const optionState = optionContext.getOptionState(option.key);
    updateOptionValues();
    if (optionState) {
      optionContext.setDefaultValue(option.key, defaultValue);
    }

    return () => {
      optionContext.removeStateChangeListener(optionContextUpdate);
      optionContext.optionExit(option.key);
    };
  }, [option, defaultOption]);

  function optionContextUpdate() {}

  function updateOptionValues() {
    const values = React.Children.map(children, (child) =>
      getComponentOptionValue(child.type)
    );
    console.log(new Set(values), values);
    // if (values && new Set(values).size !== values?.length) {
    //   throw new Error("Duplicate values");
    // }
    optionContext.setOptions(option.key, values);
  }
  console.log(option);
  let result = null;
  const { children } = props;
  const value = optionContext.getValue(option.key);
  React.Children.forEach(children, (child) => {
    if (getComponentOptionValue(child.type) === value) {
      result = child;
    }
  });

  return result;
}

export default Selector;
