import { memo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  htmlFor: string;
  className?: string;
}

function LabelComponent ({ children, htmlFor, className }: Props) {
  return (
    <label htmlFor={htmlFor} className={`
      flex flex-col gap-2
      ${ className }
    `}>
      { children }
    </label>
  )
}

const Label = memo(LabelComponent);
export default Label;