import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export default function Button ({ children, className, onClick, ...props }: Props) {
  return (
    <button 
      onClick={ onClick }
      className={ className }
      { ...props }
    >
      { children }
    </button>
  )
}