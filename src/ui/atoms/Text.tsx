import { memo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
}

function TextComponent ({ children, className }: Props) {
  return (
    <p className={`${className}`}>
      { children }
    </p>
  )
}

const Text = memo(TextComponent);
export default Text;