interface OptionProps {
  key: string;
  label: string;
}

const Option = ({ key, label }: OptionProps) => {
  return { key, label };
};

export default Option;
