import { type ReactNode, type JSX, memo } from "react";


type Props = {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

function HeadingComponent ({ children, level, className }:Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${className}`}>{children}</Tag>;
}

const Heading = memo(HeadingComponent);
export default Heading;