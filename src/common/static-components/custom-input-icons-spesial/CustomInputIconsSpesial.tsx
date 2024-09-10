import { FC } from "react";

export interface CustomInputIconsSpesialPropsType {
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomInputIconsSpesial: FC<CustomInputIconsSpesialPropsType> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      {label && <h3>{label}</h3>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </>
  );
};

export default CustomInputIconsSpesial;
