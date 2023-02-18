import * as React from "react";

import OptionContext from "./OptionContext";

function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue;
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`);
  }
  return optionValue;
}

export interface Props {
  option: {
    key: string;
    label: string;
  };
  children: JSX.Element[];
  defaultOption: JSX.Element;
}

export default function Selector({
  children,
  defaultOption: DefaultOption,
}: Props) {
  return <>{children.filter((item) => item.type.name === DefaultOption)[0]}</>;
}
