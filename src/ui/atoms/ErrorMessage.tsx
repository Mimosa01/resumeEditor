import { memo } from "react";

type Props = {
  message: string;
  className?: string;
}

function ErrorMessageComponent ({ message, className }: Props) {
  return (
    <p className={`
      text-base text-quaternary-400 font-medium leading-5
      ${className}
    `}>
      { message }
    </p>
  )
}

const ErrorMessage = memo(ErrorMessageComponent);
export default ErrorMessage;