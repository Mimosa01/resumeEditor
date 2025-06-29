import { forwardRef } from "react";

type Props = {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  htmlFor: string;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type, htmlFor, error = false, className = "", ...props }, ref) => {
    return (
      <input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        className={`
          w-full p-2.5 text-lg text-neutral-800 font-normal font-wix-display rounded-xl leading-5.5
          placeholder:text-neutral-300 placeholder:text-lg placeholder:font-normal placeholder:font-wix-display placeholder:leading-5.5
          border transition-colors duration-300
          ${error 
            ? "border-quaternary-400 focus:outline-quaternary-400" 
            : "border-neutral-300 focus:outline-2 focus:outline-secondary-500 hover:border-neutral-400 active:outline-secondary-500 active:outline-2"
          }
          -outline-offset-1
          disabled:bg-neutral-100 disabled:cursor-not-allowed

          ${className}
        `}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;