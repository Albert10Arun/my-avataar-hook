import { useContext, useEffect } from "react";
import { OptionContext } from "./OptionContext";

export default function Selector({ children, option, defaultOption }) {
  const { selectedValues, setAllValues, setSelectedValues } =
    useContext(OptionContext);

  const setAllValuesFromChildren = () => {
    const values = children.map((item) => item.type.displayName);
    setSelectedValues((prev) => ({
      ...prev,
      [option.key]: defaultOption.displayName,
    }));
    setAllValues((prev) => ({
      ...prev,
      [option.key]: values,
    }));
  };

  useEffect(() => {
    setAllValuesFromChildren();
  }, [children]);

  return children.filter(
    (item) =>
      item.type.displayName ===
      (selectedValues ? selectedValues[option.key] : defaultOption.displayName)
  )[0];
}
