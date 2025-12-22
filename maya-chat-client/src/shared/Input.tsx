import React, { memo } from "react";

interface InputProps {
  value?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  children?: string;
  containerClass?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  className,
  placeholder,
  id,
  name,
  children,
  containerClass,
}) => {
  return (
    <div className={containerClass}>
      <label htmlFor={id}>{children}</label>
      <input
        className={`p-2 outline-none ${className} `}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </div>
  );
};

export default memo(Input);
