import React, { useContext } from "react";
import { OptionContext } from "./options/OptionContext";

type Props = {
  selectedType: {
    key: string[];
  };
};

const AvatarForm = ({ selectedType }: Props) => {
  const { allValues, setSelectedValues } = useContext(OptionContext);

  return allValues
    ? Object.keys(allValues)?.map((value) => (
        <select
          onChange={(e) =>
            setSelectedValues((prev) => ({
              ...prev,
              [value]: e.target.value,
            }))
          }
        >
          {allValues[value].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ))
    : null;
};

export default AvatarForm;
