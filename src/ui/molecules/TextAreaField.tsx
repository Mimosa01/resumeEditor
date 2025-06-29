import Label from "../atoms/Label";
import Text from "../atoms/Text";
import ErrorMessage from "../atoms/ErrorMessage";
import TextArea from "../atoms/TextArea";
import { type ReactNode, forwardRef } from "react";

type Props = {
  fieldName: string;
  htmlFor: string;
  placeholder: string;
  button?: ReactNode;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  ({ htmlFor, fieldName, placeholder, disabled, error, required, className, ...props }, ref) => {

    return (
      <Label htmlFor={htmlFor}>
        <Text className={`text-base leading-4.5 ${required && 'mr-1'}`}>
          {fieldName}
          {required && 
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-quaternary-400"
              title="Обязательное поле"
            />
          }
        </Text>
        <div className="relative">
          <TextArea
            htmlFor={htmlFor}
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
            error={!!error}
            className={className}
            {...props}
          />
        </div>
        {error && <ErrorMessage message={error} />}
      </Label>
    );
  }
);

TextAreaField.displayName = "InputField";
export default TextAreaField;