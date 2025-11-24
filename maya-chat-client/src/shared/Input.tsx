import React, { memo } from "react";

interface InputProps {
  value?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  className,
  placeholder,
}) => {
  return (
    <input
      className={`p-2 outline-none ${className} `}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default memo(Input);
