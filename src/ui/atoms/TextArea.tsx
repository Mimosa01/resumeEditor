import { type TextareaHTMLAttributes, forwardRef } from "react";


type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  placeholder: string;
  htmlFor: string;
  error?: boolean;
  className?: string; 
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ placeholder, htmlFor, error = false, className, ...props }, ref) => {
    return (
      <textarea
        id={htmlFor}
        placeholder={placeholder}
        ref={ref}
        {...props}
        className={`
          w-full p-[15px] text-lg text-neutral-800 font-normal font-wix-display rounded-xl leading-5.5 resize-none
          placeholder:text-neutral-300 placeholder:text-lg placeholder:font-normal placeholder:font-wix-display placeholder:leading-5.5
          border transition-colors duration-300
          ${error 
            ? "border-quaternary-400 focus:border-quaternary-400" 
            : "border-neutral-300 focus:border-secondary-500 focus:border-2 hover:border-neutral-400 active:border-secondary-500 active:border-2"}
          focus:outline-none
          disabled:bg-neutral-100 disabled:cursor-not-allowed

          ${className}
        `}
      />
    );
  }
);

TextArea.displayName = "Textarea";
export default TextArea;